import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex412Cb, useFlex478Cb, useFlex411Cb, useFlex409Cb, useFlex408Cb, useDiv1Cb, useFlex410Cb, useFlex420Cb, useFlex419Cb, useFlex416Cb, useFlex413Cb, useFlex417Cb, useFlex414Cb, useFlex418Cb, useFlex415Cb, useFlex501Cb, useFlex498Cb, useFlex495Cb, useFlex428Cb, useFlex426Cb, useFlex427Cb, useFlex421Cb, useFlex422Cb, useFlex423Cb, useFlex424Cb, useFlex425Cb, useFlex463Cb, useFlex461Cb, useFlex459Cb, useFlex453Cb, useFlex441Cb, useFlex429Cb, useFlex430Cb, useFlex442Cb, useFlex454Cb, useFlex443Cb, useFlex431Cb, useFlex432Cb, useFlex444Cb, useFlex455Cb, useFlex445Cb, useFlex446Cb, useFlex433Cb, useFlex434Cb, useFlex462Cb, useFlex460Cb, useFlex457Cb, useFlex449Cb, useFlex450Cb, useFlex437Cb, useFlex438Cb, useFlex493Cb, useFlex491Cb, useFlex492Cb, useFlex458Cb, useFlex451Cb, useFlex439Cb, useFlex440Cb, useFlex477Cb, useFlex476Cb, useFlex474Cb, useFlex490Cb, useFlex488Cb, useFlex489Cb, useFlex487Cb, useMenu15Cb, useFlex486Cb, useImage62Cb, useTextBox348Cb, useImage61Cb, useTextBox345Cb, useButton68Cb, useTextBox346Cb, useTextBox347Cb, useTextBox364Cb, useTextBox365Cb, useTextBox366Cb, useTextBox358Cb, useTextBox349Cb, useTextBox350Cb, useTextBox351Cb, useTextBox443Cb, useTextBox444Cb, useTextBox445Cb, useTextBox361Cb, useTextBox352Cb, useTextBox353Cb, useTextBox354Cb, useTextBox363Cb, useTextBox355Cb, useTextBox356Cb, useTextBox357Cb, useTextBox436Cb, useTextBox427Cb, useTextBox428Cb, useTextBox429Cb, useTextBox442Cb, useTextBox377Cb, useTextBox378Cb, useTextBox367Cb, useTextBox368Cb, useTextBox369Cb, useTextBox370Cb, useTextBox371Cb, useTextBox372Cb, useTextBox373Cb, useTextBox374Cb, useTextBox375Cb, useTextBox376Cb, useTextBox403Cb, useImage66Cb, useTextBox379Cb, useTextBox380Cb, useTextBox381Cb, useTextBox397Cb, useImage67Cb, useTextBox382Cb, useTextBox383Cb, useTextBox384Cb, useTextBox398Cb, useTextBox399Cb, useTextBox385Cb, useTextBox386Cb, useTextBox387Cb, useImage68Cb, useTextBox404Cb, useTextBox401Cb, useTextBox391Cb, useTextBox392Cb, useTextBox393Cb, useImage70Cb, useImage76Cb, useTextBox423Cb, useTextBox424Cb, useTextBox425Cb, useImage71Cb, useTextBox394Cb, useTextBox395Cb, useTextBox396Cb, useTextBox413Cb, useTextBox414Cb, useImage75Cb, usemariem_kallelCb, useTextBox421Cb, useButton72Cb, useTextBox419Cb, useTextBox420Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
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

  const Flex412Props = useStore((state)=>state["Home"]["Flex412"]);
const Flex412IoProps = useIoStore((state)=>state["Home"]["Flex412"]);
const Flex412Cb = useFlex412Cb()
const Flex478Props = useStore((state)=>state["Home"]["Flex478"]);
const Flex478IoProps = useIoStore((state)=>state["Home"]["Flex478"]);
const Flex478Cb = useFlex478Cb()
const Flex411Props = useStore((state)=>state["Home"]["Flex411"]);
const Flex411IoProps = useIoStore((state)=>state["Home"]["Flex411"]);
const Flex411Cb = useFlex411Cb()
const Flex409Props = useStore((state)=>state["Home"]["Flex409"]);
const Flex409IoProps = useIoStore((state)=>state["Home"]["Flex409"]);
const Flex409Cb = useFlex409Cb()
const Flex408Props = useStore((state)=>state["Home"]["Flex408"]);
const Flex408IoProps = useIoStore((state)=>state["Home"]["Flex408"]);
const Flex408Cb = useFlex408Cb()
const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Flex410Props = useStore((state)=>state["Home"]["Flex410"]);
const Flex410IoProps = useIoStore((state)=>state["Home"]["Flex410"]);
const Flex410Cb = useFlex410Cb()
const Flex420Props = useStore((state)=>state["Home"]["Flex420"]);
const Flex420IoProps = useIoStore((state)=>state["Home"]["Flex420"]);
const Flex420Cb = useFlex420Cb()
const Flex419Props = useStore((state)=>state["Home"]["Flex419"]);
const Flex419IoProps = useIoStore((state)=>state["Home"]["Flex419"]);
const Flex419Cb = useFlex419Cb()
const Flex416Props = useStore((state)=>state["Home"]["Flex416"]);
const Flex416IoProps = useIoStore((state)=>state["Home"]["Flex416"]);
const Flex416Cb = useFlex416Cb()
const Flex413Props = useStore((state)=>state["Home"]["Flex413"]);
const Flex413IoProps = useIoStore((state)=>state["Home"]["Flex413"]);
const Flex413Cb = useFlex413Cb()
const Flex417Props = useStore((state)=>state["Home"]["Flex417"]);
const Flex417IoProps = useIoStore((state)=>state["Home"]["Flex417"]);
const Flex417Cb = useFlex417Cb()
const Flex414Props = useStore((state)=>state["Home"]["Flex414"]);
const Flex414IoProps = useIoStore((state)=>state["Home"]["Flex414"]);
const Flex414Cb = useFlex414Cb()
const Flex418Props = useStore((state)=>state["Home"]["Flex418"]);
const Flex418IoProps = useIoStore((state)=>state["Home"]["Flex418"]);
const Flex418Cb = useFlex418Cb()
const Flex415Props = useStore((state)=>state["Home"]["Flex415"]);
const Flex415IoProps = useIoStore((state)=>state["Home"]["Flex415"]);
const Flex415Cb = useFlex415Cb()
const Flex501Props = useStore((state)=>state["Home"]["Flex501"]);
const Flex501IoProps = useIoStore((state)=>state["Home"]["Flex501"]);
const Flex501Cb = useFlex501Cb()
const Flex498Props = useStore((state)=>state["Home"]["Flex498"]);
const Flex498IoProps = useIoStore((state)=>state["Home"]["Flex498"]);
const Flex498Cb = useFlex498Cb()
const Flex495Props = useStore((state)=>state["Home"]["Flex495"]);
const Flex495IoProps = useIoStore((state)=>state["Home"]["Flex495"]);
const Flex495Cb = useFlex495Cb()
const Flex428Props = useStore((state)=>state["Home"]["Flex428"]);
const Flex428IoProps = useIoStore((state)=>state["Home"]["Flex428"]);
const Flex428Cb = useFlex428Cb()
const Flex426Props = useStore((state)=>state["Home"]["Flex426"]);
const Flex426IoProps = useIoStore((state)=>state["Home"]["Flex426"]);
const Flex426Cb = useFlex426Cb()
const Flex427Props = useStore((state)=>state["Home"]["Flex427"]);
const Flex427IoProps = useIoStore((state)=>state["Home"]["Flex427"]);
const Flex427Cb = useFlex427Cb()
const Flex421Props = useStore((state)=>state["Home"]["Flex421"]);
const Flex421IoProps = useIoStore((state)=>state["Home"]["Flex421"]);
const Flex421Cb = useFlex421Cb()
const Flex422Props = useStore((state)=>state["Home"]["Flex422"]);
const Flex422IoProps = useIoStore((state)=>state["Home"]["Flex422"]);
const Flex422Cb = useFlex422Cb()
const Flex423Props = useStore((state)=>state["Home"]["Flex423"]);
const Flex423IoProps = useIoStore((state)=>state["Home"]["Flex423"]);
const Flex423Cb = useFlex423Cb()
const Flex424Props = useStore((state)=>state["Home"]["Flex424"]);
const Flex424IoProps = useIoStore((state)=>state["Home"]["Flex424"]);
const Flex424Cb = useFlex424Cb()
const Flex425Props = useStore((state)=>state["Home"]["Flex425"]);
const Flex425IoProps = useIoStore((state)=>state["Home"]["Flex425"]);
const Flex425Cb = useFlex425Cb()
const Flex463Props = useStore((state)=>state["Home"]["Flex463"]);
const Flex463IoProps = useIoStore((state)=>state["Home"]["Flex463"]);
const Flex463Cb = useFlex463Cb()
const Flex461Props = useStore((state)=>state["Home"]["Flex461"]);
const Flex461IoProps = useIoStore((state)=>state["Home"]["Flex461"]);
const Flex461Cb = useFlex461Cb()
const Flex459Props = useStore((state)=>state["Home"]["Flex459"]);
const Flex459IoProps = useIoStore((state)=>state["Home"]["Flex459"]);
const Flex459Cb = useFlex459Cb()
const Flex453Props = useStore((state)=>state["Home"]["Flex453"]);
const Flex453IoProps = useIoStore((state)=>state["Home"]["Flex453"]);
const Flex453Cb = useFlex453Cb()
const Flex441Props = useStore((state)=>state["Home"]["Flex441"]);
const Flex441IoProps = useIoStore((state)=>state["Home"]["Flex441"]);
const Flex441Cb = useFlex441Cb()
const Flex429Props = useStore((state)=>state["Home"]["Flex429"]);
const Flex429IoProps = useIoStore((state)=>state["Home"]["Flex429"]);
const Flex429Cb = useFlex429Cb()
const Flex430Props = useStore((state)=>state["Home"]["Flex430"]);
const Flex430IoProps = useIoStore((state)=>state["Home"]["Flex430"]);
const Flex430Cb = useFlex430Cb()
const Flex442Props = useStore((state)=>state["Home"]["Flex442"]);
const Flex442IoProps = useIoStore((state)=>state["Home"]["Flex442"]);
const Flex442Cb = useFlex442Cb()
const Flex454Props = useStore((state)=>state["Home"]["Flex454"]);
const Flex454IoProps = useIoStore((state)=>state["Home"]["Flex454"]);
const Flex454Cb = useFlex454Cb()
const Flex443Props = useStore((state)=>state["Home"]["Flex443"]);
const Flex443IoProps = useIoStore((state)=>state["Home"]["Flex443"]);
const Flex443Cb = useFlex443Cb()
const Flex431Props = useStore((state)=>state["Home"]["Flex431"]);
const Flex431IoProps = useIoStore((state)=>state["Home"]["Flex431"]);
const Flex431Cb = useFlex431Cb()
const Flex432Props = useStore((state)=>state["Home"]["Flex432"]);
const Flex432IoProps = useIoStore((state)=>state["Home"]["Flex432"]);
const Flex432Cb = useFlex432Cb()
const Flex444Props = useStore((state)=>state["Home"]["Flex444"]);
const Flex444IoProps = useIoStore((state)=>state["Home"]["Flex444"]);
const Flex444Cb = useFlex444Cb()
const Flex455Props = useStore((state)=>state["Home"]["Flex455"]);
const Flex455IoProps = useIoStore((state)=>state["Home"]["Flex455"]);
const Flex455Cb = useFlex455Cb()
const Flex445Props = useStore((state)=>state["Home"]["Flex445"]);
const Flex445IoProps = useIoStore((state)=>state["Home"]["Flex445"]);
const Flex445Cb = useFlex445Cb()
const Flex446Props = useStore((state)=>state["Home"]["Flex446"]);
const Flex446IoProps = useIoStore((state)=>state["Home"]["Flex446"]);
const Flex446Cb = useFlex446Cb()
const Flex433Props = useStore((state)=>state["Home"]["Flex433"]);
const Flex433IoProps = useIoStore((state)=>state["Home"]["Flex433"]);
const Flex433Cb = useFlex433Cb()
const Flex434Props = useStore((state)=>state["Home"]["Flex434"]);
const Flex434IoProps = useIoStore((state)=>state["Home"]["Flex434"]);
const Flex434Cb = useFlex434Cb()
const Flex462Props = useStore((state)=>state["Home"]["Flex462"]);
const Flex462IoProps = useIoStore((state)=>state["Home"]["Flex462"]);
const Flex462Cb = useFlex462Cb()
const Flex460Props = useStore((state)=>state["Home"]["Flex460"]);
const Flex460IoProps = useIoStore((state)=>state["Home"]["Flex460"]);
const Flex460Cb = useFlex460Cb()
const Flex457Props = useStore((state)=>state["Home"]["Flex457"]);
const Flex457IoProps = useIoStore((state)=>state["Home"]["Flex457"]);
const Flex457Cb = useFlex457Cb()
const Flex449Props = useStore((state)=>state["Home"]["Flex449"]);
const Flex449IoProps = useIoStore((state)=>state["Home"]["Flex449"]);
const Flex449Cb = useFlex449Cb()
const Flex450Props = useStore((state)=>state["Home"]["Flex450"]);
const Flex450IoProps = useIoStore((state)=>state["Home"]["Flex450"]);
const Flex450Cb = useFlex450Cb()
const Flex437Props = useStore((state)=>state["Home"]["Flex437"]);
const Flex437IoProps = useIoStore((state)=>state["Home"]["Flex437"]);
const Flex437Cb = useFlex437Cb()
const Flex438Props = useStore((state)=>state["Home"]["Flex438"]);
const Flex438IoProps = useIoStore((state)=>state["Home"]["Flex438"]);
const Flex438Cb = useFlex438Cb()
const Flex493Props = useStore((state)=>state["Home"]["Flex493"]);
const Flex493IoProps = useIoStore((state)=>state["Home"]["Flex493"]);
const Flex493Cb = useFlex493Cb()
const Flex491Props = useStore((state)=>state["Home"]["Flex491"]);
const Flex491IoProps = useIoStore((state)=>state["Home"]["Flex491"]);
const Flex491Cb = useFlex491Cb()
const Flex492Props = useStore((state)=>state["Home"]["Flex492"]);
const Flex492IoProps = useIoStore((state)=>state["Home"]["Flex492"]);
const Flex492Cb = useFlex492Cb()
const Flex458Props = useStore((state)=>state["Home"]["Flex458"]);
const Flex458IoProps = useIoStore((state)=>state["Home"]["Flex458"]);
const Flex458Cb = useFlex458Cb()
const Flex451Props = useStore((state)=>state["Home"]["Flex451"]);
const Flex451IoProps = useIoStore((state)=>state["Home"]["Flex451"]);
const Flex451Cb = useFlex451Cb()
const Flex439Props = useStore((state)=>state["Home"]["Flex439"]);
const Flex439IoProps = useIoStore((state)=>state["Home"]["Flex439"]);
const Flex439Cb = useFlex439Cb()
const Flex440Props = useStore((state)=>state["Home"]["Flex440"]);
const Flex440IoProps = useIoStore((state)=>state["Home"]["Flex440"]);
const Flex440Cb = useFlex440Cb()
const Flex477Props = useStore((state)=>state["Home"]["Flex477"]);
const Flex477IoProps = useIoStore((state)=>state["Home"]["Flex477"]);
const Flex477Cb = useFlex477Cb()
const Flex476Props = useStore((state)=>state["Home"]["Flex476"]);
const Flex476IoProps = useIoStore((state)=>state["Home"]["Flex476"]);
const Flex476Cb = useFlex476Cb()
const Flex474Props = useStore((state)=>state["Home"]["Flex474"]);
const Flex474IoProps = useIoStore((state)=>state["Home"]["Flex474"]);
const Flex474Cb = useFlex474Cb()
const Flex490Props = useStore((state)=>state["Home"]["Flex490"]);
const Flex490IoProps = useIoStore((state)=>state["Home"]["Flex490"]);
const Flex490Cb = useFlex490Cb()
const Flex488Props = useStore((state)=>state["Home"]["Flex488"]);
const Flex488IoProps = useIoStore((state)=>state["Home"]["Flex488"]);
const Flex488Cb = useFlex488Cb()
const Flex489Props = useStore((state)=>state["Home"]["Flex489"]);
const Flex489IoProps = useIoStore((state)=>state["Home"]["Flex489"]);
const Flex489Cb = useFlex489Cb()
const Flex487Props = useStore((state)=>state["Home"]["Flex487"]);
const Flex487IoProps = useIoStore((state)=>state["Home"]["Flex487"]);
const Flex487Cb = useFlex487Cb()
const Menu15Props = useStore((state)=>state["Home"]["Menu15"]);
const Menu15IoProps = useIoStore((state)=>state["Home"]["Menu15"]);
const Menu15Cb = useMenu15Cb()
const Flex486Props = useStore((state)=>state["Home"]["Flex486"]);
const Flex486IoProps = useIoStore((state)=>state["Home"]["Flex486"]);
const Flex486Cb = useFlex486Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox348Props = useStore((state)=>state["Home"]["TextBox348"]);
const TextBox348IoProps = useIoStore((state)=>state["Home"]["TextBox348"]);
const TextBox348Cb = useTextBox348Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const TextBox345Props = useStore((state)=>state["Home"]["TextBox345"]);
const TextBox345IoProps = useIoStore((state)=>state["Home"]["TextBox345"]);
const TextBox345Cb = useTextBox345Cb()
const Button68Props = useStore((state)=>state["Home"]["Button68"]);
const Button68IoProps = useIoStore((state)=>state["Home"]["Button68"]);
const Button68Cb = useButton68Cb()
const TextBox346Props = useStore((state)=>state["Home"]["TextBox346"]);
const TextBox346IoProps = useIoStore((state)=>state["Home"]["TextBox346"]);
const TextBox346Cb = useTextBox346Cb()
const TextBox347Props = useStore((state)=>state["Home"]["TextBox347"]);
const TextBox347IoProps = useIoStore((state)=>state["Home"]["TextBox347"]);
const TextBox347Cb = useTextBox347Cb()
const TextBox364Props = useStore((state)=>state["Home"]["TextBox364"]);
const TextBox364IoProps = useIoStore((state)=>state["Home"]["TextBox364"]);
const TextBox364Cb = useTextBox364Cb()
const TextBox365Props = useStore((state)=>state["Home"]["TextBox365"]);
const TextBox365IoProps = useIoStore((state)=>state["Home"]["TextBox365"]);
const TextBox365Cb = useTextBox365Cb()
const TextBox366Props = useStore((state)=>state["Home"]["TextBox366"]);
const TextBox366IoProps = useIoStore((state)=>state["Home"]["TextBox366"]);
const TextBox366Cb = useTextBox366Cb()
const TextBox358Props = useStore((state)=>state["Home"]["TextBox358"]);
const TextBox358IoProps = useIoStore((state)=>state["Home"]["TextBox358"]);
const TextBox358Cb = useTextBox358Cb()
const TextBox349Props = useStore((state)=>state["Home"]["TextBox349"]);
const TextBox349IoProps = useIoStore((state)=>state["Home"]["TextBox349"]);
const TextBox349Cb = useTextBox349Cb()
const TextBox350Props = useStore((state)=>state["Home"]["TextBox350"]);
const TextBox350IoProps = useIoStore((state)=>state["Home"]["TextBox350"]);
const TextBox350Cb = useTextBox350Cb()
const TextBox351Props = useStore((state)=>state["Home"]["TextBox351"]);
const TextBox351IoProps = useIoStore((state)=>state["Home"]["TextBox351"]);
const TextBox351Cb = useTextBox351Cb()
const TextBox443Props = useStore((state)=>state["Home"]["TextBox443"]);
const TextBox443IoProps = useIoStore((state)=>state["Home"]["TextBox443"]);
const TextBox443Cb = useTextBox443Cb()
const TextBox444Props = useStore((state)=>state["Home"]["TextBox444"]);
const TextBox444IoProps = useIoStore((state)=>state["Home"]["TextBox444"]);
const TextBox444Cb = useTextBox444Cb()
const TextBox445Props = useStore((state)=>state["Home"]["TextBox445"]);
const TextBox445IoProps = useIoStore((state)=>state["Home"]["TextBox445"]);
const TextBox445Cb = useTextBox445Cb()
const TextBox361Props = useStore((state)=>state["Home"]["TextBox361"]);
const TextBox361IoProps = useIoStore((state)=>state["Home"]["TextBox361"]);
const TextBox361Cb = useTextBox361Cb()
const TextBox352Props = useStore((state)=>state["Home"]["TextBox352"]);
const TextBox352IoProps = useIoStore((state)=>state["Home"]["TextBox352"]);
const TextBox352Cb = useTextBox352Cb()
const TextBox353Props = useStore((state)=>state["Home"]["TextBox353"]);
const TextBox353IoProps = useIoStore((state)=>state["Home"]["TextBox353"]);
const TextBox353Cb = useTextBox353Cb()
const TextBox354Props = useStore((state)=>state["Home"]["TextBox354"]);
const TextBox354IoProps = useIoStore((state)=>state["Home"]["TextBox354"]);
const TextBox354Cb = useTextBox354Cb()
const TextBox363Props = useStore((state)=>state["Home"]["TextBox363"]);
const TextBox363IoProps = useIoStore((state)=>state["Home"]["TextBox363"]);
const TextBox363Cb = useTextBox363Cb()
const TextBox355Props = useStore((state)=>state["Home"]["TextBox355"]);
const TextBox355IoProps = useIoStore((state)=>state["Home"]["TextBox355"]);
const TextBox355Cb = useTextBox355Cb()
const TextBox356Props = useStore((state)=>state["Home"]["TextBox356"]);
const TextBox356IoProps = useIoStore((state)=>state["Home"]["TextBox356"]);
const TextBox356Cb = useTextBox356Cb()
const TextBox357Props = useStore((state)=>state["Home"]["TextBox357"]);
const TextBox357IoProps = useIoStore((state)=>state["Home"]["TextBox357"]);
const TextBox357Cb = useTextBox357Cb()
const TextBox436Props = useStore((state)=>state["Home"]["TextBox436"]);
const TextBox436IoProps = useIoStore((state)=>state["Home"]["TextBox436"]);
const TextBox436Cb = useTextBox436Cb()
const TextBox427Props = useStore((state)=>state["Home"]["TextBox427"]);
const TextBox427IoProps = useIoStore((state)=>state["Home"]["TextBox427"]);
const TextBox427Cb = useTextBox427Cb()
const TextBox428Props = useStore((state)=>state["Home"]["TextBox428"]);
const TextBox428IoProps = useIoStore((state)=>state["Home"]["TextBox428"]);
const TextBox428Cb = useTextBox428Cb()
const TextBox429Props = useStore((state)=>state["Home"]["TextBox429"]);
const TextBox429IoProps = useIoStore((state)=>state["Home"]["TextBox429"]);
const TextBox429Cb = useTextBox429Cb()
const TextBox442Props = useStore((state)=>state["Home"]["TextBox442"]);
const TextBox442IoProps = useIoStore((state)=>state["Home"]["TextBox442"]);
const TextBox442Cb = useTextBox442Cb()
const TextBox377Props = useStore((state)=>state["Home"]["TextBox377"]);
const TextBox377IoProps = useIoStore((state)=>state["Home"]["TextBox377"]);
const TextBox377Cb = useTextBox377Cb()
const TextBox378Props = useStore((state)=>state["Home"]["TextBox378"]);
const TextBox378IoProps = useIoStore((state)=>state["Home"]["TextBox378"]);
const TextBox378Cb = useTextBox378Cb()
const TextBox367Props = useStore((state)=>state["Home"]["TextBox367"]);
const TextBox367IoProps = useIoStore((state)=>state["Home"]["TextBox367"]);
const TextBox367Cb = useTextBox367Cb()
const TextBox368Props = useStore((state)=>state["Home"]["TextBox368"]);
const TextBox368IoProps = useIoStore((state)=>state["Home"]["TextBox368"]);
const TextBox368Cb = useTextBox368Cb()
const TextBox369Props = useStore((state)=>state["Home"]["TextBox369"]);
const TextBox369IoProps = useIoStore((state)=>state["Home"]["TextBox369"]);
const TextBox369Cb = useTextBox369Cb()
const TextBox370Props = useStore((state)=>state["Home"]["TextBox370"]);
const TextBox370IoProps = useIoStore((state)=>state["Home"]["TextBox370"]);
const TextBox370Cb = useTextBox370Cb()
const TextBox371Props = useStore((state)=>state["Home"]["TextBox371"]);
const TextBox371IoProps = useIoStore((state)=>state["Home"]["TextBox371"]);
const TextBox371Cb = useTextBox371Cb()
const TextBox372Props = useStore((state)=>state["Home"]["TextBox372"]);
const TextBox372IoProps = useIoStore((state)=>state["Home"]["TextBox372"]);
const TextBox372Cb = useTextBox372Cb()
const TextBox373Props = useStore((state)=>state["Home"]["TextBox373"]);
const TextBox373IoProps = useIoStore((state)=>state["Home"]["TextBox373"]);
const TextBox373Cb = useTextBox373Cb()
const TextBox374Props = useStore((state)=>state["Home"]["TextBox374"]);
const TextBox374IoProps = useIoStore((state)=>state["Home"]["TextBox374"]);
const TextBox374Cb = useTextBox374Cb()
const TextBox375Props = useStore((state)=>state["Home"]["TextBox375"]);
const TextBox375IoProps = useIoStore((state)=>state["Home"]["TextBox375"]);
const TextBox375Cb = useTextBox375Cb()
const TextBox376Props = useStore((state)=>state["Home"]["TextBox376"]);
const TextBox376IoProps = useIoStore((state)=>state["Home"]["TextBox376"]);
const TextBox376Cb = useTextBox376Cb()
const TextBox403Props = useStore((state)=>state["Home"]["TextBox403"]);
const TextBox403IoProps = useIoStore((state)=>state["Home"]["TextBox403"]);
const TextBox403Cb = useTextBox403Cb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const TextBox379Props = useStore((state)=>state["Home"]["TextBox379"]);
const TextBox379IoProps = useIoStore((state)=>state["Home"]["TextBox379"]);
const TextBox379Cb = useTextBox379Cb()
const TextBox380Props = useStore((state)=>state["Home"]["TextBox380"]);
const TextBox380IoProps = useIoStore((state)=>state["Home"]["TextBox380"]);
const TextBox380Cb = useTextBox380Cb()
const TextBox381Props = useStore((state)=>state["Home"]["TextBox381"]);
const TextBox381IoProps = useIoStore((state)=>state["Home"]["TextBox381"]);
const TextBox381Cb = useTextBox381Cb()
const TextBox397Props = useStore((state)=>state["Home"]["TextBox397"]);
const TextBox397IoProps = useIoStore((state)=>state["Home"]["TextBox397"]);
const TextBox397Cb = useTextBox397Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const TextBox382Props = useStore((state)=>state["Home"]["TextBox382"]);
const TextBox382IoProps = useIoStore((state)=>state["Home"]["TextBox382"]);
const TextBox382Cb = useTextBox382Cb()
const TextBox383Props = useStore((state)=>state["Home"]["TextBox383"]);
const TextBox383IoProps = useIoStore((state)=>state["Home"]["TextBox383"]);
const TextBox383Cb = useTextBox383Cb()
const TextBox384Props = useStore((state)=>state["Home"]["TextBox384"]);
const TextBox384IoProps = useIoStore((state)=>state["Home"]["TextBox384"]);
const TextBox384Cb = useTextBox384Cb()
const TextBox398Props = useStore((state)=>state["Home"]["TextBox398"]);
const TextBox398IoProps = useIoStore((state)=>state["Home"]["TextBox398"]);
const TextBox398Cb = useTextBox398Cb()
const TextBox399Props = useStore((state)=>state["Home"]["TextBox399"]);
const TextBox399IoProps = useIoStore((state)=>state["Home"]["TextBox399"]);
const TextBox399Cb = useTextBox399Cb()
const TextBox385Props = useStore((state)=>state["Home"]["TextBox385"]);
const TextBox385IoProps = useIoStore((state)=>state["Home"]["TextBox385"]);
const TextBox385Cb = useTextBox385Cb()
const TextBox386Props = useStore((state)=>state["Home"]["TextBox386"]);
const TextBox386IoProps = useIoStore((state)=>state["Home"]["TextBox386"]);
const TextBox386Cb = useTextBox386Cb()
const TextBox387Props = useStore((state)=>state["Home"]["TextBox387"]);
const TextBox387IoProps = useIoStore((state)=>state["Home"]["TextBox387"]);
const TextBox387Cb = useTextBox387Cb()
const Image68Props = useStore((state)=>state["Home"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox404Props = useStore((state)=>state["Home"]["TextBox404"]);
const TextBox404IoProps = useIoStore((state)=>state["Home"]["TextBox404"]);
const TextBox404Cb = useTextBox404Cb()
const TextBox401Props = useStore((state)=>state["Home"]["TextBox401"]);
const TextBox401IoProps = useIoStore((state)=>state["Home"]["TextBox401"]);
const TextBox401Cb = useTextBox401Cb()
const TextBox391Props = useStore((state)=>state["Home"]["TextBox391"]);
const TextBox391IoProps = useIoStore((state)=>state["Home"]["TextBox391"]);
const TextBox391Cb = useTextBox391Cb()
const TextBox392Props = useStore((state)=>state["Home"]["TextBox392"]);
const TextBox392IoProps = useIoStore((state)=>state["Home"]["TextBox392"]);
const TextBox392Cb = useTextBox392Cb()
const TextBox393Props = useStore((state)=>state["Home"]["TextBox393"]);
const TextBox393IoProps = useIoStore((state)=>state["Home"]["TextBox393"]);
const TextBox393Cb = useTextBox393Cb()
const Image70Props = useStore((state)=>state["Home"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home"]["Image70"]);
const Image70Cb = useImage70Cb()
const Image76Props = useStore((state)=>state["Home"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox423Props = useStore((state)=>state["Home"]["TextBox423"]);
const TextBox423IoProps = useIoStore((state)=>state["Home"]["TextBox423"]);
const TextBox423Cb = useTextBox423Cb()
const TextBox424Props = useStore((state)=>state["Home"]["TextBox424"]);
const TextBox424IoProps = useIoStore((state)=>state["Home"]["TextBox424"]);
const TextBox424Cb = useTextBox424Cb()
const TextBox425Props = useStore((state)=>state["Home"]["TextBox425"]);
const TextBox425IoProps = useIoStore((state)=>state["Home"]["TextBox425"]);
const TextBox425Cb = useTextBox425Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox394Props = useStore((state)=>state["Home"]["TextBox394"]);
const TextBox394IoProps = useIoStore((state)=>state["Home"]["TextBox394"]);
const TextBox394Cb = useTextBox394Cb()
const TextBox395Props = useStore((state)=>state["Home"]["TextBox395"]);
const TextBox395IoProps = useIoStore((state)=>state["Home"]["TextBox395"]);
const TextBox395Cb = useTextBox395Cb()
const TextBox396Props = useStore((state)=>state["Home"]["TextBox396"]);
const TextBox396IoProps = useIoStore((state)=>state["Home"]["TextBox396"]);
const TextBox396Cb = useTextBox396Cb()
const TextBox413Props = useStore((state)=>state["Home"]["TextBox413"]);
const TextBox413IoProps = useIoStore((state)=>state["Home"]["TextBox413"]);
const TextBox413Cb = useTextBox413Cb()
const TextBox414Props = useStore((state)=>state["Home"]["TextBox414"]);
const TextBox414IoProps = useIoStore((state)=>state["Home"]["TextBox414"]);
const TextBox414Cb = useTextBox414Cb()
const Image75Props = useStore((state)=>state["Home"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["Home"]["Image75"]);
const Image75Cb = useImage75Cb()
const mariem_kallelProps = useStore((state)=>state["Home"]["mariem_kallel"]);
const mariem_kallelIoProps = useIoStore((state)=>state["Home"]["mariem_kallel"]);
const mariem_kallelCb = usemariem_kallelCb()
const TextBox421Props = useStore((state)=>state["Home"]["TextBox421"]);
const TextBox421IoProps = useIoStore((state)=>state["Home"]["TextBox421"]);
const TextBox421Cb = useTextBox421Cb()
const Button72Props = useStore((state)=>state["Home"]["Button72"]);
const Button72IoProps = useIoStore((state)=>state["Home"]["Button72"]);
const Button72Cb = useButton72Cb()
const TextBox419Props = useStore((state)=>state["Home"]["TextBox419"]);
const TextBox419IoProps = useIoStore((state)=>state["Home"]["TextBox419"]);
const TextBox419Cb = useTextBox419Cb()
const TextBox420Props = useStore((state)=>state["Home"]["TextBox420"]);
const TextBox420IoProps = useIoStore((state)=>state["Home"]["TextBox420"]);
const TextBox420Cb = useTextBox420Cb()

  return (<>
  <Flex className="p-Home Flex490 bpt" {...Flex490Props} {...Flex490Cb} {...Flex490IoProps}>
<Flex className="p-Home Flex488 bpt" {...Flex488Props} {...Flex488Cb} {...Flex488IoProps}>
<TextBox className="p-Home mariem_kallel bpt" {...mariem_kallelProps} {...mariem_kallelCb} {...mariem_kallelIoProps}/>
</Flex>
<Flex className="p-Home Flex489 bpt" {...Flex489Props} {...Flex489Cb} {...Flex489IoProps}>
<Flex className="p-Home Flex487 bpt" {...Flex487Props} {...Flex487Cb} {...Flex487IoProps}>
<TextBox className="p-Home TextBox421 bpt" {...TextBox421Props} {...TextBox421Cb} {...TextBox421IoProps}/>
<Button className="p-Home Button72 bpt" {...Button72Props} {...Button72Cb} {...Button72IoProps}/>
</Flex>
<Menu className="p-Home Menu15 bpt" {...Menu15Props} {...Menu15Cb} {...Menu15IoProps}>
<Flex className="p-Home Flex486 bpt" {...Flex486Props} {...Flex486Cb} {...Flex486IoProps}>
<TextBox className="p-Home TextBox420 bpt" {...TextBox420Props} {...TextBox420Cb} {...TextBox420IoProps}/>
<TextBox className="p-Home TextBox419 bpt" {...TextBox419Props} {...TextBox419Cb} {...TextBox419IoProps}/>
</Flex>
</Menu>
</Flex>
</Flex>
<Flex className="p-Home Flex412 bpt" {...Flex412Props} {...Flex412Cb} {...Flex412IoProps}>
<Flex className="p-Home Flex478 bpt" {...Flex478Props} {...Flex478Cb} {...Flex478IoProps}>
<Flex className="p-Home Flex411 bpt" {...Flex411Props} {...Flex411Cb} {...Flex411IoProps}>
<Flex className="p-Home Flex410 bpt" {...Flex410Props} {...Flex410Cb} {...Flex410IoProps}>
<TextBox className="p-Home TextBox346 bpt" {...TextBox346Props} {...TextBox346Cb} {...TextBox346IoProps}/>
<TextBox className="p-Home TextBox347 bpt" {...TextBox347Props} {...TextBox347Cb} {...TextBox347IoProps}/>
</Flex>
<TextBox className="p-Home TextBox348 bpt" {...TextBox348Props} {...TextBox348Cb} {...TextBox348IoProps}/>
<Flex className="p-Home Flex409 bpt" {...Flex409Props} {...Flex409Cb} {...Flex409IoProps}>
<Div className="p-Home Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Button className="p-Home Button68 bpt" {...Button68Props} {...Button68Cb} {...Button68IoProps}/>
</Div>
<Flex className="p-Home Flex408 bpt" {...Flex408Props} {...Flex408Cb} {...Flex408IoProps}>
<TextBox className="p-Home TextBox345 bpt" {...TextBox345Props} {...TextBox345Cb} {...TextBox345IoProps}/>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex>
</Flex>
</Flex>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex420 bpt" {...Flex420Props} {...Flex420Cb} {...Flex420IoProps}>
<TextBox className="p-Home TextBox366 bpt" {...TextBox366Props} {...TextBox366Cb} {...TextBox366IoProps}/>
<TextBox className="p-Home TextBox365 bpt" {...TextBox365Props} {...TextBox365Cb} {...TextBox365IoProps}/>
<TextBox className="p-Home TextBox364 bpt" {...TextBox364Props} {...TextBox364Cb} {...TextBox364IoProps}/>
<Flex className="p-Home Flex419 bpt" {...Flex419Props} {...Flex419Cb} {...Flex419IoProps}>
<Flex className="p-Home Flex418 bpt" {...Flex418Props} {...Flex418Cb} {...Flex418IoProps}>
<TextBox className="p-Home TextBox363 bpt" {...TextBox363Props} {...TextBox363Cb} {...TextBox363IoProps}/>
<Flex className="p-Home Flex415 bpt" {...Flex415Props} {...Flex415Cb} {...Flex415IoProps}>
<TextBox className="p-Home TextBox356 bpt" {...TextBox356Props} {...TextBox356Cb} {...TextBox356IoProps}/>
<TextBox className="p-Home TextBox357 bpt" {...TextBox357Props} {...TextBox357Cb} {...TextBox357IoProps}/>
<TextBox className="p-Home TextBox355 bpt" {...TextBox355Props} {...TextBox355Cb} {...TextBox355IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex417 bpt" {...Flex417Props} {...Flex417Cb} {...Flex417IoProps}>
<TextBox className="p-Home TextBox361 bpt" {...TextBox361Props} {...TextBox361Cb} {...TextBox361IoProps}/>
<Flex className="p-Home Flex414 bpt" {...Flex414Props} {...Flex414Cb} {...Flex414IoProps}>
<TextBox className="p-Home TextBox353 bpt" {...TextBox353Props} {...TextBox353Cb} {...TextBox353IoProps}/>
<TextBox className="p-Home TextBox352 bpt" {...TextBox352Props} {...TextBox352Cb} {...TextBox352IoProps}/>
<TextBox className="p-Home TextBox354 bpt" {...TextBox354Props} {...TextBox354Cb} {...TextBox354IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex416 bpt" {...Flex416Props} {...Flex416Cb} {...Flex416IoProps}>
<TextBox className="p-Home TextBox358 bpt" {...TextBox358Props} {...TextBox358Cb} {...TextBox358IoProps}/>
<Flex className="p-Home Flex413 bpt" {...Flex413Props} {...Flex413Cb} {...Flex413IoProps}>
<TextBox className="p-Home TextBox350 bpt" {...TextBox350Props} {...TextBox350Cb} {...TextBox350IoProps}/>
<TextBox className="p-Home TextBox443 bpt" {...TextBox443Props} {...TextBox443Cb} {...TextBox443IoProps}/>
<TextBox className="p-Home TextBox444 bpt" {...TextBox444Props} {...TextBox444Cb} {...TextBox444IoProps}/>
<TextBox className="p-Home TextBox445 bpt" {...TextBox445Props} {...TextBox445Cb} {...TextBox445IoProps}/>
<TextBox className="p-Home TextBox349 bpt" {...TextBox349Props} {...TextBox349Cb} {...TextBox349IoProps}/>
<TextBox className="p-Home TextBox351 bpt" {...TextBox351Props} {...TextBox351Cb} {...TextBox351IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex501 bpt" {...Flex501Props} {...Flex501Cb} {...Flex501IoProps}>
<Flex className="p-Home Flex498 bpt" {...Flex498Props} {...Flex498Cb} {...Flex498IoProps}>
<TextBox className="p-Home TextBox436 bpt" {...TextBox436Props} {...TextBox436Cb} {...TextBox436IoProps}/>
<Flex className="p-Home Flex495 bpt" {...Flex495Props} {...Flex495Cb} {...Flex495IoProps}>
<TextBox className="p-Home TextBox428 bpt" {...TextBox428Props} {...TextBox428Cb} {...TextBox428IoProps}/>
<TextBox className="p-Home TextBox427 bpt" {...TextBox427Props} {...TextBox427Cb} {...TextBox427IoProps}/>
<TextBox className="p-Home TextBox429 bpt" {...TextBox429Props} {...TextBox429Cb} {...TextBox429IoProps}/>
<TextBox className="p-Home TextBox442 bpt" {...TextBox442Props} {...TextBox442Cb} {...TextBox442IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex428 bpt" {...Flex428Props} {...Flex428Cb} {...Flex428IoProps}>
<Flex className="p-Home Flex426 bpt" {...Flex426Props} {...Flex426Cb} {...Flex426IoProps}>
<TextBox className="p-Home TextBox378 bpt" {...TextBox378Props} {...TextBox378Cb} {...TextBox378IoProps}/>
<TextBox className="p-Home TextBox377 bpt" {...TextBox377Props} {...TextBox377Cb} {...TextBox377IoProps}/>
</Flex>
<Flex className="p-Home Flex427 bpt" {...Flex427Props} {...Flex427Cb} {...Flex427IoProps}>
<Flex className="p-Home Flex425 bpt" {...Flex425Props} {...Flex425Cb} {...Flex425IoProps}>
<TextBox className="p-Home TextBox375 bpt" {...TextBox375Props} {...TextBox375Cb} {...TextBox375IoProps}/>
<TextBox className="p-Home TextBox376 bpt" {...TextBox376Props} {...TextBox376Cb} {...TextBox376IoProps}/>
</Flex>
<Flex className="p-Home Flex424 bpt" {...Flex424Props} {...Flex424Cb} {...Flex424IoProps}>
<TextBox className="p-Home TextBox373 bpt" {...TextBox373Props} {...TextBox373Cb} {...TextBox373IoProps}/>
<TextBox className="p-Home TextBox374 bpt" {...TextBox374Props} {...TextBox374Cb} {...TextBox374IoProps}/>
</Flex>
<Flex className="p-Home Flex423 bpt" {...Flex423Props} {...Flex423Cb} {...Flex423IoProps}>
<TextBox className="p-Home TextBox371 bpt" {...TextBox371Props} {...TextBox371Cb} {...TextBox371IoProps}/>
<TextBox className="p-Home TextBox372 bpt" {...TextBox372Props} {...TextBox372Cb} {...TextBox372IoProps}/>
</Flex>
<Flex className="p-Home Flex422 bpt" {...Flex422Props} {...Flex422Cb} {...Flex422IoProps}>
<TextBox className="p-Home TextBox370 bpt" {...TextBox370Props} {...TextBox370Cb} {...TextBox370IoProps}/>
<TextBox className="p-Home TextBox369 bpt" {...TextBox369Props} {...TextBox369Cb} {...TextBox369IoProps}/>
</Flex>
<Flex className="p-Home Flex421 bpt" {...Flex421Props} {...Flex421Cb} {...Flex421IoProps}>
<TextBox className="p-Home TextBox367 bpt" {...TextBox367Props} {...TextBox367Cb} {...TextBox367IoProps}/>
<TextBox className="p-Home TextBox368 bpt" {...TextBox368Props} {...TextBox368Cb} {...TextBox368IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex463 bpt" {...Flex463Props} {...Flex463Cb} {...Flex463IoProps}>
<Flex className="p-Home Flex462 bpt" {...Flex462Props} {...Flex462Cb} {...Flex462IoProps}>
<TextBox className="p-Home TextBox404 bpt" {...TextBox404Props} {...TextBox404Cb} {...TextBox404IoProps}/>
<Flex className="p-Home Flex460 bpt" {...Flex460Props} {...Flex460Cb} {...Flex460IoProps}>
<Flex className="p-Home Flex458 bpt" {...Flex458Props} {...Flex458Cb} {...Flex458IoProps}>
<Flex className="p-Home Flex451 bpt" {...Flex451Props} {...Flex451Cb} {...Flex451IoProps}>
<Flex className="p-Home Flex439 bpt" {...Flex439Props} {...Flex439Cb} {...Flex439IoProps}>
<TextBox className="p-Home TextBox394 bpt" {...TextBox394Props} {...TextBox394Cb} {...TextBox394IoProps}/>
<Image className="p-Home Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Flex>
<Flex className="p-Home Flex440 bpt" {...Flex440Props} {...Flex440Cb} {...Flex440IoProps}>
<TextBox className="p-Home TextBox396 bpt" {...TextBox396Props} {...TextBox396Cb} {...TextBox396IoProps}/>
<TextBox className="p-Home TextBox395 bpt" {...TextBox395Props} {...TextBox395Cb} {...TextBox395IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex457 bpt" {...Flex457Props} {...Flex457Cb} {...Flex457IoProps}>
<Flex className="p-Home Flex450 bpt" {...Flex450Props} {...Flex450Cb} {...Flex450IoProps}>
<Flex className="p-Home Flex438 bpt" {...Flex438Props} {...Flex438Cb} {...Flex438IoProps}>
<TextBox className="p-Home TextBox393 bpt" {...TextBox393Props} {...TextBox393Cb} {...TextBox393IoProps}/>
<Image className="p-Home Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
</Flex>
<Flex className="p-Home Flex437 bpt" {...Flex437Props} {...Flex437Cb} {...Flex437IoProps}>
<TextBox className="p-Home TextBox391 bpt" {...TextBox391Props} {...TextBox391Cb} {...TextBox391IoProps}/>
<TextBox className="p-Home TextBox392 bpt" {...TextBox392Props} {...TextBox392Cb} {...TextBox392IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex493 bpt" {...Flex493Props} {...Flex493Cb} {...Flex493IoProps}>
<Flex className="p-Home Flex491 bpt" {...Flex491Props} {...Flex491Cb} {...Flex491IoProps}>
<TextBox className="p-Home TextBox423 bpt" {...TextBox423Props} {...TextBox423Cb} {...TextBox423IoProps}/>
<Image className="p-Home Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
</Flex>
<Flex className="p-Home Flex492 bpt" {...Flex492Props} {...Flex492Cb} {...Flex492IoProps}>
<TextBox className="p-Home TextBox425 bpt" {...TextBox425Props} {...TextBox425Cb} {...TextBox425IoProps}/>
<TextBox className="p-Home TextBox424 bpt" {...TextBox424Props} {...TextBox424Cb} {...TextBox424IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex449 bpt" {...Flex449Props} {...Flex449Cb} {...Flex449IoProps}>
<TextBox className="p-Home TextBox401 bpt" {...TextBox401Props} {...TextBox401Cb} {...TextBox401IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex461 bpt" {...Flex461Props} {...Flex461Cb} {...Flex461IoProps}>
<TextBox className="p-Home TextBox403 bpt" {...TextBox403Props} {...TextBox403Cb} {...TextBox403IoProps}/>
<Flex className="p-Home Flex459 bpt" {...Flex459Props} {...Flex459Cb} {...Flex459IoProps}>
<Flex className="p-Home Flex455 bpt" {...Flex455Props} {...Flex455Cb} {...Flex455IoProps}>
<Flex className="p-Home Flex446 bpt" {...Flex446Props} {...Flex446Cb} {...Flex446IoProps}>
<Flex className="p-Home Flex434 bpt" {...Flex434Props} {...Flex434Cb} {...Flex434IoProps}>
<TextBox className="p-Home TextBox387 bpt" {...TextBox387Props} {...TextBox387Cb} {...TextBox387IoProps}/>
<Image className="p-Home Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Flex>
<Flex className="p-Home Flex433 bpt" {...Flex433Props} {...Flex433Cb} {...Flex433IoProps}>
<TextBox className="p-Home TextBox385 bpt" {...TextBox385Props} {...TextBox385Cb} {...TextBox385IoProps}/>
<TextBox className="p-Home TextBox386 bpt" {...TextBox386Props} {...TextBox386Cb} {...TextBox386IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex445 bpt" {...Flex445Props} {...Flex445Cb} {...Flex445IoProps}>
<TextBox className="p-Home TextBox399 bpt" {...TextBox399Props} {...TextBox399Cb} {...TextBox399IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex454 bpt" {...Flex454Props} {...Flex454Cb} {...Flex454IoProps}>
<Flex className="p-Home Flex443 bpt" {...Flex443Props} {...Flex443Cb} {...Flex443IoProps}>
<Flex className="p-Home Flex431 bpt" {...Flex431Props} {...Flex431Cb} {...Flex431IoProps}>
<TextBox className="p-Home TextBox382 bpt" {...TextBox382Props} {...TextBox382Cb} {...TextBox382IoProps}/>
<Image className="p-Home Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
</Flex>
<Flex className="p-Home Flex432 bpt" {...Flex432Props} {...Flex432Cb} {...Flex432IoProps}>
<TextBox className="p-Home TextBox384 bpt" {...TextBox384Props} {...TextBox384Cb} {...TextBox384IoProps}/>
<TextBox className="p-Home TextBox383 bpt" {...TextBox383Props} {...TextBox383Cb} {...TextBox383IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex444 bpt" {...Flex444Props} {...Flex444Cb} {...Flex444IoProps}>
<TextBox className="p-Home TextBox398 bpt" {...TextBox398Props} {...TextBox398Cb} {...TextBox398IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex453 bpt" {...Flex453Props} {...Flex453Cb} {...Flex453IoProps}>
<Flex className="p-Home Flex441 bpt" {...Flex441Props} {...Flex441Cb} {...Flex441IoProps}>
<Flex className="p-Home Flex429 bpt" {...Flex429Props} {...Flex429Cb} {...Flex429IoProps}>
<TextBox className="p-Home TextBox379 bpt" {...TextBox379Props} {...TextBox379Cb} {...TextBox379IoProps}/>
<Image className="p-Home Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
</Flex>
<Flex className="p-Home Flex430 bpt" {...Flex430Props} {...Flex430Cb} {...Flex430IoProps}>
<TextBox className="p-Home TextBox381 bpt" {...TextBox381Props} {...TextBox381Cb} {...TextBox381IoProps}/>
<TextBox className="p-Home TextBox380 bpt" {...TextBox380Props} {...TextBox380Cb} {...TextBox380IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex442 bpt" {...Flex442Props} {...Flex442Cb} {...Flex442IoProps}>
<TextBox className="p-Home TextBox397 bpt" {...TextBox397Props} {...TextBox397Cb} {...TextBox397IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex477 bpt" {...Flex477Props} {...Flex477Cb} {...Flex477IoProps}>
<Flex className="p-Home Flex476 bpt" {...Flex476Props} {...Flex476Cb} {...Flex476IoProps}>
<TextBox className="p-Home TextBox414 bpt" {...TextBox414Props} {...TextBox414Cb} {...TextBox414IoProps}/>
<TextBox className="p-Home TextBox413 bpt" {...TextBox413Props} {...TextBox413Cb} {...TextBox413IoProps}/>
<Flex className="p-Home Flex474 bpt" {...Flex474Props} {...Flex474Cb} {...Flex474IoProps}>
<Image className="p-Home Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
