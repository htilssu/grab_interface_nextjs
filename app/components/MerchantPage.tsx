import React from "react";
import { Merchant } from "@/Grab";
import FoodShop from "@/app/components/FoodShop";

interface MerchantPageProps {
  merchant?: Merchant;
}

const MerchantPage = ({ merchant }: MerchantPageProps) => {
  /*const searchParams = useSearchParams();
  const router = useRouter();

  const [merchant, setMerchant] = useState<Merchant>();

  useEffect(() => {
    if (searchParams && searchParams.has("q")) {
      axios
        .get(origin + `/api/merchant?id=${searchParams!.get("q")}`)
        .then((r) => {
          setMerchant((value) => {
            return {
              ...value!,
              ...r.data.merchant,
            };
          });
        })
        .catch(() => {
          router.push("/not-found");
        });
    }
  }, [router, searchParams]);*/

  return <div>{merchant && <FoodShop merchant={merchant!} />}</div>;
};

export default MerchantPage;
