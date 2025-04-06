import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Upload } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex232Cb, useFlex229Cb, useFlex324Cb, useFlex322Cb, useFlex320Cb, useFlex317Cb, useFlex321Cb, useFlex318Cb, useFlex319Cb, useFlex313Cb, useFlex314Cb, useFlex315Cb, useFlex316Cb, useTextBox169Cb, useImage43Cb, useImage42Cb, useTextBox182Cb, useTextBox251Cb, useUpload8Cb, useImage51Cb, useTextBox247Cb, useTextBox248Cb, useTextBox249Cb, useTextBox250Cb, useButton43Cb, useTextBox243Cb, useTextBox244Cb, useButton44Cb, useTextBox245Cb, useButton45Cb, useTextBox246Cb, useButton46Cb } from "../page-cbs/view_project";
import "../page-css/view_project.css";
import "../custom/view_project";

export default function ViewProject() {
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

  const Flex232Props = useStore((state)=>state["view_project"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["view_project"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex229Props = useStore((state)=>state["view_project"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["view_project"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex324Props = useStore((state)=>state["view_project"]["Flex324"]);
const Flex324IoProps = useIoStore((state)=>state["view_project"]["Flex324"]);
const Flex324Cb = useFlex324Cb()
const Flex322Props = useStore((state)=>state["view_project"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["view_project"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex320Props = useStore((state)=>state["view_project"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["view_project"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Flex317Props = useStore((state)=>state["view_project"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["view_project"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex321Props = useStore((state)=>state["view_project"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["view_project"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const Flex318Props = useStore((state)=>state["view_project"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["view_project"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Flex319Props = useStore((state)=>state["view_project"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["view_project"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const Flex313Props = useStore((state)=>state["view_project"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["view_project"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const Flex314Props = useStore((state)=>state["view_project"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["view_project"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Flex315Props = useStore((state)=>state["view_project"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["view_project"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex316Props = useStore((state)=>state["view_project"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["view_project"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const TextBox169Props = useStore((state)=>state["view_project"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["view_project"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Image43Props = useStore((state)=>state["view_project"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["view_project"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image42Props = useStore((state)=>state["view_project"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["view_project"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox182Props = useStore((state)=>state["view_project"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["view_project"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox251Props = useStore((state)=>state["view_project"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["view_project"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const Upload8Props = useStore((state)=>state["view_project"]["Upload8"]);
const Upload8IoProps = useIoStore((state)=>state["view_project"]["Upload8"]);
const Upload8Cb = useUpload8Cb()
const Image51Props = useStore((state)=>state["view_project"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["view_project"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox247Props = useStore((state)=>state["view_project"]["TextBox247"]);
const TextBox247IoProps = useIoStore((state)=>state["view_project"]["TextBox247"]);
const TextBox247Cb = useTextBox247Cb()
const TextBox248Props = useStore((state)=>state["view_project"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["view_project"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const TextBox249Props = useStore((state)=>state["view_project"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["view_project"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const TextBox250Props = useStore((state)=>state["view_project"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["view_project"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const Button43Props = useStore((state)=>state["view_project"]["Button43"]);
const Button43IoProps = useIoStore((state)=>state["view_project"]["Button43"]);
const Button43Cb = useButton43Cb()
const TextBox243Props = useStore((state)=>state["view_project"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["view_project"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const TextBox244Props = useStore((state)=>state["view_project"]["TextBox244"]);
const TextBox244IoProps = useIoStore((state)=>state["view_project"]["TextBox244"]);
const TextBox244Cb = useTextBox244Cb()
const Button44Props = useStore((state)=>state["view_project"]["Button44"]);
const Button44IoProps = useIoStore((state)=>state["view_project"]["Button44"]);
const Button44Cb = useButton44Cb()
const TextBox245Props = useStore((state)=>state["view_project"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["view_project"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const Button45Props = useStore((state)=>state["view_project"]["Button45"]);
const Button45IoProps = useIoStore((state)=>state["view_project"]["Button45"]);
const Button45Cb = useButton45Cb()
const TextBox246Props = useStore((state)=>state["view_project"]["TextBox246"]);
const TextBox246IoProps = useIoStore((state)=>state["view_project"]["TextBox246"]);
const TextBox246Cb = useTextBox246Cb()
const Button46Props = useStore((state)=>state["view_project"]["Button46"]);
const Button46IoProps = useIoStore((state)=>state["view_project"]["Button46"]);
const Button46Cb = useButton46Cb()

  return (<>
  <Flex2 className="p-view_project Flex232 bpt" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<TextBox2 className="p-view_project TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<Flex2 className="p-view_project Flex324 bpt" {...Flex324Props} {...Flex324Cb} {...Flex324IoProps}>
<Flex2 className="p-view_project Flex322 bpt" {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<Flex2 className="p-view_project Flex320 bpt" {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<Flex2 className="p-view_project Flex317 bpt" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Image2 className="p-view_project Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<Upload className="p-view_project Upload8 bpt" {...Upload8Props} {...Upload8Cb} {...Upload8IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-view_project Flex321 bpt" {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<Flex2 className="p-view_project Flex319 bpt" {...Flex319Props} {...Flex319Cb} {...Flex319IoProps}>
<Flex2 className="p-view_project Flex316 bpt" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<Button2 className="p-view_project Button46 bpt" {...Button46Props} {...Button46Cb} {...Button46IoProps}/>
<TextBox2 className="p-view_project TextBox246 bpt" {...TextBox246Props} {...TextBox246Cb} {...TextBox246IoProps}/>
</Flex2>
<Flex2 className="p-view_project Flex315 bpt" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<Button2 className="p-view_project Button45 bpt" {...Button45Props} {...Button45Cb} {...Button45IoProps}/>
<TextBox2 className="p-view_project TextBox245 bpt" {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
</Flex2>
<Flex2 className="p-view_project Flex314 bpt" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Button2 className="p-view_project Button44 bpt" {...Button44Props} {...Button44Cb} {...Button44IoProps}/>
<TextBox2 className="p-view_project TextBox244 bpt" {...TextBox244Props} {...TextBox244Cb} {...TextBox244IoProps}/>
</Flex2>
<Flex2 className="p-view_project Flex313 bpt" {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<Button2 className="p-view_project Button43 bpt" {...Button43Props} {...Button43Cb} {...Button43IoProps}/>
<TextBox2 className="p-view_project TextBox243 bpt" {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-view_project Flex318 bpt" {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<TextBox2 className="p-view_project TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
<TextBox2 className="p-view_project TextBox249 bpt" {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
<TextBox2 className="p-view_project TextBox248 bpt" {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
<TextBox2 className="p-view_project TextBox247 bpt" {...TextBox247Props} {...TextBox247Cb} {...TextBox247IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<TextBox2 className="p-view_project TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
</Flex2>
<Image2 className="p-view_project Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<Flex2 className="p-view_project Flex229 bpt" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Image2 className="p-view_project Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox2 className="p-view_project TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
</Flex2>
</Flex2>
  </>);
}
