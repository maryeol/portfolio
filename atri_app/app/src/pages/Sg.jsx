import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex14Cb, useFlex16Cb, useFlex19Cb, useFlex22Cb, useFlex20Cb, useFlex23Cb, useFlex21Cb, useFlex24Cb, useFlex26Cb, useFlex27Cb, useFlex34Cb, useFlex35Cb, useFlex36Cb, useFlex38Cb, useFlex44Cb, useFlex28Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useImage3Cb, useTextBox20Cb, useTextBox23Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useImage4Cb, useTextBox21Cb, useTextBox24Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useTextBox31Cb, useTextBox32Cb, useImage5Cb, useTextBox39Cb, useTextBox40Cb, useTextBox41Cb, useTextBox48Cb, useTextBox51Cb, useTextBox49Cb, useTextBox52Cb, useTextBox50Cb, useTextBox53Cb, useTextBox56Cb, useTextBox57Cb, useTextBox68Cb, useTextBox69Cb, useTextBox43Cb, useTextBox44Cb } from "../page-cbs/sg";
import "../page-css/sg.css";
import "../custom/sg";

export default function Sg() {
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

  const Flex14Props = useStore((state)=>state["sg"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["sg"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex16Props = useStore((state)=>state["sg"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["sg"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex19Props = useStore((state)=>state["sg"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["sg"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex22Props = useStore((state)=>state["sg"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["sg"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex20Props = useStore((state)=>state["sg"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["sg"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex23Props = useStore((state)=>state["sg"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["sg"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Flex21Props = useStore((state)=>state["sg"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["sg"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex24Props = useStore((state)=>state["sg"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["sg"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex26Props = useStore((state)=>state["sg"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["sg"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["sg"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["sg"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex34Props = useStore((state)=>state["sg"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["sg"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["sg"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["sg"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["sg"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["sg"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex38Props = useStore((state)=>state["sg"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["sg"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex44Props = useStore((state)=>state["sg"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["sg"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex28Props = useStore((state)=>state["sg"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["sg"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const TextBox15Props = useStore((state)=>state["sg"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["sg"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["sg"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["sg"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["sg"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["sg"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image3Props = useStore((state)=>state["sg"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["sg"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox20Props = useStore((state)=>state["sg"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["sg"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox23Props = useStore((state)=>state["sg"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["sg"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox33Props = useStore((state)=>state["sg"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["sg"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["sg"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["sg"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["sg"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["sg"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image4Props = useStore((state)=>state["sg"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["sg"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox21Props = useStore((state)=>state["sg"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["sg"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox24Props = useStore((state)=>state["sg"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["sg"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox36Props = useStore((state)=>state["sg"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["sg"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["sg"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["sg"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["sg"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["sg"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox31Props = useStore((state)=>state["sg"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["sg"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["sg"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["sg"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image5Props = useStore((state)=>state["sg"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["sg"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox39Props = useStore((state)=>state["sg"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["sg"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["sg"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["sg"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["sg"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["sg"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox48Props = useStore((state)=>state["sg"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["sg"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox51Props = useStore((state)=>state["sg"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["sg"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox49Props = useStore((state)=>state["sg"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["sg"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox52Props = useStore((state)=>state["sg"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["sg"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox50Props = useStore((state)=>state["sg"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["sg"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox53Props = useStore((state)=>state["sg"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["sg"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox56Props = useStore((state)=>state["sg"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["sg"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["sg"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["sg"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox68Props = useStore((state)=>state["sg"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["sg"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["sg"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["sg"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox43Props = useStore((state)=>state["sg"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["sg"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["sg"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["sg"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()

  return (<>
  <Flex4 className="p-sg Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<TextBox4 className="p-sg TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox4 className="p-sg TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox4 className="p-sg TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<Flex4 className="p-sg Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Flex4 className="p-sg Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Image4 className="p-sg Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<TextBox4 className="p-sg TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox4 className="p-sg TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<Flex4 className="p-sg Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox4 className="p-sg TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox4 className="p-sg TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox4 className="p-sg TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-sg Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Image4 className="p-sg Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<TextBox4 className="p-sg TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<TextBox4 className="p-sg TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Flex4 className="p-sg Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<TextBox4 className="p-sg TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox4 className="p-sg TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox4 className="p-sg TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-sg Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image4 className="p-sg Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<TextBox4 className="p-sg TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox4 className="p-sg TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Flex4 className="p-sg Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox4 className="p-sg TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox4 className="p-sg TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox4 className="p-sg TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Flex4>
</Flex4>
</Flex4>
</Flex4>
<Flex4 className="p-sg Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Flex4 className="p-sg Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox4 className="p-sg TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox4 className="p-sg TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex4>
<Flex4 className="p-sg Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Flex4 className="p-sg Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox4 className="p-sg TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox4 className="p-sg TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Flex4>
<Flex4 className="p-sg Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox4 className="p-sg TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox4 className="p-sg TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex4>
<Flex4 className="p-sg Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox4 className="p-sg TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox4 className="p-sg TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex4>
<Flex4 className="p-sg Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<TextBox4 className="p-sg TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox4 className="p-sg TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex4>
<Flex4 className="p-sg Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<TextBox4 className="p-sg TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox4 className="p-sg TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Flex4>
</Flex4>
</Flex4>
  </>);
}
