import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Upload as Upload1 } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { useFlex312Cb, useFlex286Cb, useFlex284Cb, useFlex278Cb, useFlex279Cb, useFlex280Cb, useFlex282Cb, useFlex285Cb, useFlex283Cb, useFlex288Cb, useFlex287Cb, useFlex336Cb, useFlex330Cb, useFlex351Cb, useTextBox242Cb, useButton30Cb, useTextBox216Cb, useButton31Cb, useTextBox217Cb, useButton33Cb, useTextBox219Cb, useTextBox223Cb, useButton34Cb, useTextBox220Cb, useTextBox221Cb, useTextBox222Cb, useTextBox224Cb, useImage47Cb, useUpload4Cb, useTextBox252Cb, useButton48Cb, useButton51Cb, useButton52Cb, useTextBox264Cb } from "../page-cbs/view_page";
import "../page-css/view_page.css";
import "../custom/view_page";

export default function ViewPage() {
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

  const Flex312Props = useStore((state)=>state["view_page"]["Flex312"]);
const Flex312IoProps = useIoStore((state)=>state["view_page"]["Flex312"]);
const Flex312Cb = useFlex312Cb()
const Flex286Props = useStore((state)=>state["view_page"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["view_page"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex284Props = useStore((state)=>state["view_page"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["view_page"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex278Props = useStore((state)=>state["view_page"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["view_page"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex279Props = useStore((state)=>state["view_page"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["view_page"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex280Props = useStore((state)=>state["view_page"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["view_page"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex282Props = useStore((state)=>state["view_page"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["view_page"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex285Props = useStore((state)=>state["view_page"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["view_page"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex283Props = useStore((state)=>state["view_page"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["view_page"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex288Props = useStore((state)=>state["view_page"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["view_page"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex287Props = useStore((state)=>state["view_page"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["view_page"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex336Props = useStore((state)=>state["view_page"]["Flex336"]);
const Flex336IoProps = useIoStore((state)=>state["view_page"]["Flex336"]);
const Flex336Cb = useFlex336Cb()
const Flex330Props = useStore((state)=>state["view_page"]["Flex330"]);
const Flex330IoProps = useIoStore((state)=>state["view_page"]["Flex330"]);
const Flex330Cb = useFlex330Cb()
const Flex351Props = useStore((state)=>state["view_page"]["Flex351"]);
const Flex351IoProps = useIoStore((state)=>state["view_page"]["Flex351"]);
const Flex351Cb = useFlex351Cb()
const TextBox242Props = useStore((state)=>state["view_page"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["view_page"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()
const Button30Props = useStore((state)=>state["view_page"]["Button30"]);
const Button30IoProps = useIoStore((state)=>state["view_page"]["Button30"]);
const Button30Cb = useButton30Cb()
const TextBox216Props = useStore((state)=>state["view_page"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["view_page"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const Button31Props = useStore((state)=>state["view_page"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["view_page"]["Button31"]);
const Button31Cb = useButton31Cb()
const TextBox217Props = useStore((state)=>state["view_page"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["view_page"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const Button33Props = useStore((state)=>state["view_page"]["Button33"]);
const Button33IoProps = useIoStore((state)=>state["view_page"]["Button33"]);
const Button33Cb = useButton33Cb()
const TextBox219Props = useStore((state)=>state["view_page"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["view_page"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox223Props = useStore((state)=>state["view_page"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["view_page"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const Button34Props = useStore((state)=>state["view_page"]["Button34"]);
const Button34IoProps = useIoStore((state)=>state["view_page"]["Button34"]);
const Button34Cb = useButton34Cb()
const TextBox220Props = useStore((state)=>state["view_page"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["view_page"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox221Props = useStore((state)=>state["view_page"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["view_page"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["view_page"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["view_page"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox224Props = useStore((state)=>state["view_page"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["view_page"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const Image47Props = useStore((state)=>state["view_page"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["view_page"]["Image47"]);
const Image47Cb = useImage47Cb()
const Upload4Props = useStore((state)=>state["view_page"]["Upload4"]);
const Upload4IoProps = useIoStore((state)=>state["view_page"]["Upload4"]);
const Upload4Cb = useUpload4Cb()
const TextBox252Props = useStore((state)=>state["view_page"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["view_page"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const Button48Props = useStore((state)=>state["view_page"]["Button48"]);
const Button48IoProps = useIoStore((state)=>state["view_page"]["Button48"]);
const Button48Cb = useButton48Cb()
const Button51Props = useStore((state)=>state["view_page"]["Button51"]);
const Button51IoProps = useIoStore((state)=>state["view_page"]["Button51"]);
const Button51Cb = useButton51Cb()
const Button52Props = useStore((state)=>state["view_page"]["Button52"]);
const Button52IoProps = useIoStore((state)=>state["view_page"]["Button52"]);
const Button52Cb = useButton52Cb()
const TextBox264Props = useStore((state)=>state["view_page"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["view_page"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()

  return (<>
  <Flex3 className="p-view_page Flex312 bpt" {...Flex312Props} {...Flex312Cb} {...Flex312IoProps}>
<Flex3 className="p-view_page Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<Flex3 className="p-view_page Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<Flex3 className="p-view_page Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<Image3 className="p-view_page Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<Upload1 className="p-view_page Upload4 bpt" {...Upload4Props} {...Upload4Cb} {...Upload4IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-view_page Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Flex3 className="p-view_page Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Flex3 className="p-view_page Flex279 bpt" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<Button3 className="p-view_page Button30 bpt" {...Button30Props} {...Button30Cb} {...Button30IoProps}/>
<TextBox3 className="p-view_page TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
</Flex3>
<Flex3 className="p-view_page Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<Button3 className="p-view_page Button31 bpt" {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
<TextBox3 className="p-view_page TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
</Flex3>
<Flex3 className="p-view_page Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Button3 className="p-view_page Button33 bpt" {...Button33Props} {...Button33Cb} {...Button33IoProps}/>
<TextBox3 className="p-view_page TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
</Flex3>
<Flex3 className="p-view_page Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<Button3 className="p-view_page Button34 bpt" {...Button34Props} {...Button34Cb} {...Button34IoProps}/>
<TextBox3 className="p-view_page TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-view_page Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<TextBox3 className="p-view_page TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<TextBox3 className="p-view_page TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<TextBox3 className="p-view_page TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<TextBox3 className="p-view_page TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<TextBox3 className="p-view_page TextBox242 bpt" {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
</Flex3>
<Flex3 className="p-view_page Flex336 bpt" {...Flex336Props} {...Flex336Cb} {...Flex336IoProps}>
<Flex3 className="p-view_page Flex351 bpt" {...Flex351Props} {...Flex351Cb} {...Flex351IoProps}>
<TextBox3 className="p-view_page TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
</Flex3>
<TextBox3 className="p-view_page TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
<Flex3 className="p-view_page Flex330 bpt" {...Flex330Props} {...Flex330Cb} {...Flex330IoProps}>
<Button3 className="p-view_page Button48 bpt" {...Button48Props} {...Button48Cb} {...Button48IoProps}/>
<Button3 className="p-view_page Button51 bpt" {...Button51Props} {...Button51Cb} {...Button51IoProps}/>
<Button3 className="p-view_page Button52 bpt" {...Button52Props} {...Button52Cb} {...Button52IoProps}/>
</Flex3>
</Flex3>
  </>);
}
