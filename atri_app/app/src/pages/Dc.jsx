import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu1 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex29Cb, useFlex27Cb, useMenu3Cb, useFlex25Cb, useFlex26Cb, useFlex28Cb, useFlex33Cb, useFlex32Cb, useFlex30Cb, useFlex31Cb, useFlex162Cb, useFlex67Cb, useFlex34Cb, useFlex49Cb, useFlex99Cb, useFlex97Cb, useFlex98Cb, useFlex95Cb, useFlex96Cb, useFlex202Cb, useFlex200Cb, useFlex198Cb, useFlex199Cb, useFlex201Cb, useFlex207Cb, useFlex205Cb, useFlex203Cb, useFlex204Cb, useFlex206Cb, useFlex84Cb, useFlex83Cb, useFlex82Cb, useFlex78Cb, useFlex72Cb, useFlex73Cb, useFlex79Cb, useFlex192Cb, useFlex190Cb, useFlex191Cb, useFlex188Cb, useFlex189Cb, useFlex197Cb, useFlex195Cb, useFlex196Cb, useFlex193Cb, useFlex194Cb, useFlex124Cb, useFlex115Cb, useFlex117Cb, useFlex121Cb, useFlex118Cb, useFlex125Cb, useFlex126Cb, useTextBox22Cb, useTextBox23Cb, useButton6Cb, useTextBox128Cb, useTextBox25Cb, useImage4Cb, useTextBox29Cb, useTextBox26Cb, useTextBox27Cb, useButton14Cb, useTextBox125Cb, useImage30Cb, useTextBox31Cb, useTextBox79Cb, useTextBox76Cb, useTextBox77Cb, useTextBox78Cb, useImage17Cb, useImage38Cb, useTextBox157Cb, useTextBox158Cb, useTextBox159Cb, useTextBox160Cb, useImage39Cb, useTextBox161Cb, useTextBox162Cb, useTextBox163Cb, useTextBox164Cb, useTextBox67Cb, useImage14Cb, useTextBox61Cb, useTextBox62Cb, useTextBox63Cb, useTextBox66Cb, useTextBox152Cb, useTextBox149Cb, useTextBox150Cb, useTextBox151Cb, useImage36Cb, useTextBox156Cb, useTextBox153Cb, useTextBox154Cb, useTextBox155Cb, useImage37Cb, useTextBox92Cb, useTextBox93Cb, useImage21Cb, useImage22Cb, useButton9Cb, useInput1Cb, useTextBox94Cb, useTextBox97Cb, useInput4Cb, useTextBox98Cb, useInput5Cb } from "../page-cbs/dc";
import "../page-css/dc.css";
import "../custom/dc";

export default function Dc() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex29Props = useStore((state)=>state["dc"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["dc"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex27Props = useStore((state)=>state["dc"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["dc"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Menu3Props = useStore((state)=>state["dc"]["Menu3"]);
const Menu3IoProps = useIoStore((state)=>state["dc"]["Menu3"]);
const Menu3Cb = useMenu3Cb()
const Flex25Props = useStore((state)=>state["dc"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["dc"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["dc"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["dc"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex28Props = useStore((state)=>state["dc"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["dc"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex33Props = useStore((state)=>state["dc"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["dc"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex32Props = useStore((state)=>state["dc"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["dc"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex30Props = useStore((state)=>state["dc"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["dc"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["dc"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["dc"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex162Props = useStore((state)=>state["dc"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["dc"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex67Props = useStore((state)=>state["dc"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["dc"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex34Props = useStore((state)=>state["dc"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["dc"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex49Props = useStore((state)=>state["dc"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["dc"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex99Props = useStore((state)=>state["dc"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["dc"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex97Props = useStore((state)=>state["dc"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["dc"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex98Props = useStore((state)=>state["dc"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["dc"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex95Props = useStore((state)=>state["dc"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["dc"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex96Props = useStore((state)=>state["dc"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["dc"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex202Props = useStore((state)=>state["dc"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["dc"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex200Props = useStore((state)=>state["dc"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["dc"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex198Props = useStore((state)=>state["dc"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["dc"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const Flex199Props = useStore((state)=>state["dc"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["dc"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Flex201Props = useStore((state)=>state["dc"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["dc"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Flex207Props = useStore((state)=>state["dc"]["Flex207"]);
const Flex207IoProps = useIoStore((state)=>state["dc"]["Flex207"]);
const Flex207Cb = useFlex207Cb()
const Flex205Props = useStore((state)=>state["dc"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["dc"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const Flex203Props = useStore((state)=>state["dc"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["dc"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const Flex204Props = useStore((state)=>state["dc"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["dc"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex206Props = useStore((state)=>state["dc"]["Flex206"]);
const Flex206IoProps = useIoStore((state)=>state["dc"]["Flex206"]);
const Flex206Cb = useFlex206Cb()
const Flex84Props = useStore((state)=>state["dc"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["dc"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex83Props = useStore((state)=>state["dc"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["dc"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Flex82Props = useStore((state)=>state["dc"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["dc"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex78Props = useStore((state)=>state["dc"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["dc"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex72Props = useStore((state)=>state["dc"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["dc"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["dc"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["dc"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex79Props = useStore((state)=>state["dc"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["dc"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex192Props = useStore((state)=>state["dc"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["dc"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const Flex190Props = useStore((state)=>state["dc"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["dc"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex191Props = useStore((state)=>state["dc"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["dc"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex188Props = useStore((state)=>state["dc"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["dc"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex189Props = useStore((state)=>state["dc"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["dc"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex197Props = useStore((state)=>state["dc"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["dc"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Flex195Props = useStore((state)=>state["dc"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["dc"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex196Props = useStore((state)=>state["dc"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["dc"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const Flex193Props = useStore((state)=>state["dc"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["dc"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex194Props = useStore((state)=>state["dc"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["dc"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex124Props = useStore((state)=>state["dc"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["dc"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex115Props = useStore((state)=>state["dc"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["dc"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex117Props = useStore((state)=>state["dc"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["dc"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex121Props = useStore((state)=>state["dc"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["dc"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex118Props = useStore((state)=>state["dc"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["dc"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex125Props = useStore((state)=>state["dc"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["dc"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex126Props = useStore((state)=>state["dc"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["dc"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const TextBox22Props = useStore((state)=>state["dc"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["dc"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["dc"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["dc"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Button6Props = useStore((state)=>state["dc"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["dc"]["Button6"]);
const Button6Cb = useButton6Cb()
const TextBox128Props = useStore((state)=>state["dc"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["dc"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox25Props = useStore((state)=>state["dc"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["dc"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Image4Props = useStore((state)=>state["dc"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["dc"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox29Props = useStore((state)=>state["dc"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["dc"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox26Props = useStore((state)=>state["dc"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["dc"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["dc"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["dc"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Button14Props = useStore((state)=>state["dc"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["dc"]["Button14"]);
const Button14Cb = useButton14Cb()
const TextBox125Props = useStore((state)=>state["dc"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["dc"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Image30Props = useStore((state)=>state["dc"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["dc"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox31Props = useStore((state)=>state["dc"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["dc"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox79Props = useStore((state)=>state["dc"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["dc"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox76Props = useStore((state)=>state["dc"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["dc"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["dc"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["dc"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["dc"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["dc"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Image17Props = useStore((state)=>state["dc"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["dc"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image38Props = useStore((state)=>state["dc"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["dc"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox157Props = useStore((state)=>state["dc"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["dc"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["dc"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["dc"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["dc"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["dc"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["dc"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["dc"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const Image39Props = useStore((state)=>state["dc"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["dc"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox161Props = useStore((state)=>state["dc"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["dc"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["dc"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["dc"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["dc"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["dc"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox164Props = useStore((state)=>state["dc"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["dc"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox67Props = useStore((state)=>state["dc"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["dc"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const Image14Props = useStore((state)=>state["dc"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["dc"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox61Props = useStore((state)=>state["dc"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["dc"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["dc"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["dc"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["dc"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["dc"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox66Props = useStore((state)=>state["dc"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["dc"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox152Props = useStore((state)=>state["dc"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["dc"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox149Props = useStore((state)=>state["dc"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["dc"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["dc"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["dc"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox151Props = useStore((state)=>state["dc"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["dc"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const Image36Props = useStore((state)=>state["dc"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["dc"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox156Props = useStore((state)=>state["dc"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["dc"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox153Props = useStore((state)=>state["dc"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["dc"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox154Props = useStore((state)=>state["dc"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["dc"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox155Props = useStore((state)=>state["dc"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["dc"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const Image37Props = useStore((state)=>state["dc"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["dc"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox92Props = useStore((state)=>state["dc"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["dc"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["dc"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["dc"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const Image21Props = useStore((state)=>state["dc"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["dc"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image22Props = useStore((state)=>state["dc"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["dc"]["Image22"]);
const Image22Cb = useImage22Cb()
const Button9Props = useStore((state)=>state["dc"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["dc"]["Button9"]);
const Button9Cb = useButton9Cb()
const Input1Props = useStore((state)=>state["dc"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["dc"]["Input1"]);
const Input1Cb = useInput1Cb()
const TextBox94Props = useStore((state)=>state["dc"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["dc"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox97Props = useStore((state)=>state["dc"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["dc"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Input4Props = useStore((state)=>state["dc"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["dc"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox98Props = useStore((state)=>state["dc"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["dc"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const Input5Props = useStore((state)=>state["dc"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["dc"]["Input5"]);
const Input5Cb = useInput5Cb()

  return (<>
  <Flex1 className="p-dc Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Flex1 className="p-dc Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox1 className="p-dc TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Flex1 className="p-dc Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox1 className="p-dc TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<Button1 className="p-dc Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Flex1>
<Menu1 className="p-dc Menu3 bpt" {...Menu3Props} {...Menu3Cb} {...Menu3IoProps}>
<Flex1 className="p-dc Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<TextBox1 className="p-dc TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox1 className="p-dc TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
</Flex1>
</Menu1>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Flex1 className="p-dc Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Flex1 className="p-dc Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<TextBox1 className="p-dc TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox1 className="p-dc TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Flex1>
<TextBox1 className="p-dc TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<Flex1 className="p-dc Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Button1 className="p-dc Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
<Flex1 className="p-dc Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<TextBox1 className="p-dc TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<Image1 className="p-dc Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Image1 className="p-dc Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Flex1 className="p-dc Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<TextBox1 className="p-dc TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<TextBox1 className="p-dc TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<Flex1 className="p-dc Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Image1 className="p-dc Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<Image1 className="p-dc Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Flex1 className="p-dc Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<TextBox1 className="p-dc TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
<Input className="p-dc Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<TextBox1 className="p-dc TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<Input className="p-dc Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<TextBox1 className="p-dc TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<Input className="p-dc Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex1>
<Button1 className="p-dc Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex1 className="p-dc Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox1 className="p-dc TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Flex1 className="p-dc Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Flex1 className="p-dc Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Flex1 className="p-dc Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Flex1 className="p-dc Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<TextBox1 className="p-dc TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<Image1 className="p-dc Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<TextBox1 className="p-dc TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox1 className="p-dc TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox1 className="p-dc TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<Flex1 className="p-dc Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<Flex1 className="p-dc Flex198 bpt" {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<TextBox1 className="p-dc TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<Image1 className="p-dc Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex199 bpt" {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<TextBox1 className="p-dc TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<TextBox1 className="p-dc TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<TextBox1 className="p-dc TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex207 bpt" {...Flex207Props} {...Flex207Cb} {...Flex207IoProps}>
<Flex1 className="p-dc Flex205 bpt" {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<Flex1 className="p-dc Flex203 bpt" {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<TextBox1 className="p-dc TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<Image1 className="p-dc Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<TextBox1 className="p-dc TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<TextBox1 className="p-dc TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex206 bpt" {...Flex206Props} {...Flex206Cb} {...Flex206IoProps}>
<TextBox1 className="p-dc TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<TextBox1 className="p-dc TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<Flex1 className="p-dc Flex83 bpt" {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<Flex1 className="p-dc Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<Flex1 className="p-dc Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Flex1 className="p-dc Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<TextBox1 className="p-dc TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Image1 className="p-dc Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox1 className="p-dc TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox1 className="p-dc TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<TextBox1 className="p-dc TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex192 bpt" {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<Flex1 className="p-dc Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<Flex1 className="p-dc Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<TextBox1 className="p-dc TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<Image1 className="p-dc Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<TextBox1 className="p-dc TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox1 className="p-dc TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<TextBox1 className="p-dc TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex197 bpt" {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<Flex1 className="p-dc Flex196 bpt" {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<Flex1 className="p-dc Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<TextBox1 className="p-dc TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<Image1 className="p-dc Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex1>
<Flex1 className="p-dc Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<TextBox1 className="p-dc TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox1 className="p-dc TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-dc Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<TextBox1 className="p-dc TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
