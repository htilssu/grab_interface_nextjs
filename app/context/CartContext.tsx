"use client";

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FoodCardProps } from "@/app/components/FoodCard";
import _ from "lodash";

export type CartContextType = {
  cartItem: FoodCardProps;
  quantity: number;
};

const Context = createContext<any>({});
export const CartContext = () => useContext(Context);
export const CartContextProvider: FC<{ children?: ReactNode | undefined }> = (
  props,
) => {
  const [cartItem, setCartItem] = useState<CartContextType[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItem((item) => {
        return [...item, ...JSON.parse(cart)];
      });
    }
  }, []);

  const updateCartItem = useCallback(
    (item: FoodCardProps, quantity: number) => {
      if (quantity < 0) {
        return;
      }
      if (quantity !== 0) {
        setCartItem((cart) => {
          if (
            _.find(
              cart,
              (cartItem: CartContextType) => cartItem.cartItem.ID === item.ID,
            ) === undefined
          ) {
            return [...cart, { cartItem: item, quantity }];
          }

          return _.map(cart, (cartItem: CartContextType) => {
            if (cartItem.cartItem.ID === item.ID) {
              return { ...cartItem, quantity };
            } else {
              return cartItem;
            }
          });
        });
      } else {
        setCartItem((cart) => {
          return _.filter(cart, (cartItem: CartContextType) => {
            return cartItem.cartItem.ID !== item.ID;
          });
        });
      }
    },
    [],
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));

    setTotal(
      _.reduce(
        cartItem,
        (sum, cartItem: CartContextType) => {
          return sum + cartItem.quantity * cartItem.cartItem.priceInMinorUnit;
        },
        0,
      ),
    );
  }, [cartItem]);

  return (
    <Context.Provider
      value={{
        cartItem,
        updateCartItem,
        total,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
