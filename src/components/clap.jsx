import React, { Component } from "react"
import styled from "styled-components"

class Clap extends Component {
  constructor() {
    super()
    this.state = {
      hoverColor: "#ACACAC",
    }
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(e, mouse) {
    this.setState({
      hoverColor: mouse === "on" ? "#F27C42" : "#ACACAC",
    })
  }
  render() {
    const { size } = this.props
    const { changeColor } = this
    const { hoverColor } = this.state
    return (
      <Container
        hoverColor={hoverColor}
        size={size}
        onMouseOver={e => changeColor(e, "on")}
        onMouseLeave={e => changeColor(e, "off")}
      >
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 28 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title> clap </title>{" "}
          <defs>
            <polygon
              id="path-1"
              points="0.188393918 0.072 10.4637001 0.072 10.4637001 9.98191579 0.188393918 9.98191579"
            ></polygon>{" "}
            <polygon
              id="path-3"
              points="0.00655469548 0.0262931134 15.1398666 0.0262931134 15.1398666 17.9814947 0.00655469548 17.9814947"
            ></polygon>{" "}
          </defs>{" "}
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="clap">
              <path
                d="M6.54961609,5.45077895 L3.47421006,4.16551579 C2.68582653,3.79162105 1.71617347,4.18572632 1.30237247,5.04751579 C0.884865803,5.90646316 1.18656996,6.90404211 1.96877735,7.27762105 L3.91024514,8.1252 L6.08331796,9.02267368"
                id="Fill-1"
                fill="#ffffff00"
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M4.44587038,11.6666526 L2.03810446,11.2078105 C1.252809,10.8339158 0.953575295,9.83665263 1.36861151,8.97738947 C1.78488296,8.11591579 4.31092185,7.76065263 5.09498208,8.1336"
                id="Fill-3"
                fill="#ffffff00"
                fillRule="nonzero"
              ></path>{" "}
              <line
                x1="11.8741231"
                y1="15.4684421"
                x2="8.91328441"
                y2="14.0609684"
                id="Fill-5"
                fill="#ffffff00"
                fillRule="nonzero"
              ></line>{" "}
              <path
                d="M6.2094655,5.27561053 C5.42664049,4.90424211 5.23116584,4.10750526 5.22622493,3.03129474 L5.94883263,2.17676842 C6.68101334,1.53066316 7.75535189,1.5294 8.54002974,1.90045263 L18.6268921,6.13676842 C18.2699116,3.72697895 16.4204682,3.2514 16.4918025,2.57971579 C16.661955,0.995084211 19.9779215,0.641084211 20.4942463,2.82318947 C21.1201975,5.44203158 24.257056,7.09518947 25.4471971,7.77224211 L25.1130682,17.6450842 C24.5677156,17.6488737 20.1418978,19.9895053 18.3909638,20.5680316 C16.8416805,21.0786632 16.5316386,20.9311895 15.2204453,20.3059263 L2.55689973,14.2841368 C1.7728395,13.9130842 1.4279024,13.0080316 1.78735341,12.2643474 C2.14618681,11.5222421 3.01177202,11.3460316 3.79583225,11.7202421"
                id="Fill-7"
                fill="#ffffff00"
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M3.90968929,8.78876842 C3.82600267,8.78876842 3.74138963,8.7714 3.65924705,8.73697895 L1.90954823,7.98571579 C1.3790183,7.79466316 0.933719024,7.37497895 0.691305757,6.81634737 C0.438701868,6.23276842 0.436231414,5.57529474 0.685438429,4.96487368 C1.1767499,3.76076842 2.52129432,3.12318947 3.68426039,3.54382105 L6.44715402,4.65887368 C6.78066527,4.7934 6.94402402,5.17803158 6.81185475,5.51876842 C6.68122951,5.86045263 6.30108845,6.02561053 5.97128288,5.89234737 L3.23000572,4.78582105 C2.73344453,4.60771579 2.10934617,4.92034737 1.88268204,5.47550526 C1.77212924,5.74676842 1.76965879,6.03192632 1.87712352,6.27855789 C1.97316241,6.49929474 2.15041746,6.66697895 2.37708159,6.74845263 L4.16105795,7.51329474 C4.49178994,7.65508421 4.6468109,8.04382105 4.5084655,8.38171579 C4.40378002,8.63592632 4.16291079,8.78876842 3.90968929,8.78876842"
                id="Fill-9"
                fill={hoverColor}
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M2.90909379,12.2229789 C2.83498018,12.2229789 2.76024895,12.2094 2.68644415,12.1822421 L2.00181967,11.9270842 C1.44411475,11.7271895 0.999433092,11.3087684 0.757019825,10.7526632 C0.50688639,10.1769789 0.503798323,9.50055789 0.750534884,8.89676842 C1.2619188,7.64150526 2.60862486,6.95561053 3.75120968,7.37276842 C4.08873542,7.49466316 4.26506405,7.87455789 4.14493824,8.2194 C4.02481243,8.56424211 3.65455318,8.74676842 3.31671864,8.62234737 C2.8269512,8.44897895 2.19019177,8.8134 1.9477785,9.4074 C1.83599047,9.68055789 1.83444644,9.96634737 1.94221998,10.2123474 C2.03764125,10.4324526 2.21427869,10.5972947 2.43878117,10.6784526 L3.13112581,10.9364526 C3.46772512,11.0615053 3.64065688,11.4426632 3.51836942,11.7868737 C3.42233054,12.0552947 3.17312352,12.2229789 2.90909379,12.2229789"
                id="Fill-11"
                fill={hoverColor}
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M4.43743995,15.8866421 C4.36641441,15.8866421 4.29322722,15.8743263 4.22220168,15.8484316 L2.23070721,15.1293789 C1.63038696,14.9133789 1.14679565,14.4668526 0.90314716,13.9066421 C0.679879909,13.3925368 0.672159741,12.8263263 0.881839497,12.3125368 C1.11159169,11.7516947 1.57140488,11.3058 2.1430061,11.0894842 C2.71491613,10.8728526 3.33129432,10.9091684 3.88004384,11.1905368 C4.2002764,11.3544316 4.32873999,11.7535895 4.16846931,12.0810632 C4.00788982,12.4079053 3.61786695,12.5376947 3.298252,12.3760105 C3.01167937,12.2279053 2.75722265,12.2711684 2.59355509,12.3340105 C2.36071483,12.4214842 2.16832825,12.6046421 2.0784655,12.8250632 C1.98736752,13.0458 2.03399733,13.2419053 2.08834731,13.3675895 C2.18778307,13.5971684 2.39653641,13.7834842 2.66180137,13.8785368 L4.65329584,14.5975895 C4.99113039,14.7198 5.16838544,15.0984316 5.04887724,15.4439053 C4.955,15.7164316 4.70517537,15.8866421 4.43743995,15.8866421"
                id="Fill-13"
                fill={hoverColor}
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M18.2746363,6.52765263 C18.1980522,6.52765263 18.1202329,6.51344211 18.0448841,6.48375789 L7.42162448,2.37628421 C6.91888715,2.20038947 6.26205528,2.57902105 6.00018719,3.21691579 C5.86215059,3.55481053 5.85473923,3.91575789 5.98011475,4.20375789 C6.04465536,4.35154737 6.17620701,4.54828421 6.43128136,4.63923158 C6.76973351,4.75986316 6.94760618,5.13881053 6.82933321,5.4846 C6.71136904,5.82944211 6.34327144,6.01196842 6.00327526,5.89165263 C5.46348113,5.69870526 5.03454861,5.29038947 4.79584102,4.74407368 C4.52563515,4.12354737 4.5277968,3.38081053 4.80356119,2.70502105 C5.34150248,1.39607368 6.68481167,0.704178947 7.86692375,1.13081053 L18.5037709,5.24428421 C18.839135,5.37375789 19.0074346,5.75554737 18.8808239,6.09912632 C18.7826233,6.36344211 18.5365044,6.52765263 18.2746363,6.52765263"
                id="Fill-15"
                fill={hoverColor}
                fillRule="nonzero"
              ></path>{" "}
              <g id="Group-19" transform="translate(15.631529, 0.243947)">
                <g id="Fill-17-Clipped">
                  <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1"> </use>{" "}
                  </mask>{" "}
                  <g id="path-1"> </g>{" "}
                  <path
                    d="M5.75890545,9.98191579 C5.63754441,9.98191579 5.51463934,9.94749474 5.40532177,9.87454737 C4.01816203,8.95054737 2.77027411,7.4076 2.39754441,6.16528421 C1.91333549,5.36286316 0.748516584,3.45265263 0.478928326,3.07654737 C-0.0661155166,2.31770526 0.171974457,1.31444211 1.05670568,0.636442105 C2.05384255,-0.129663158 3.64203546,-0.236084211 4.62373199,1.07444211 L5.03568014,1.62581053 C6.27770072,3.29128421 8.86148647,6.75612632 9.8848719,6.86917895 C10.240926,6.90928421 10.4984708,7.23549474 10.45987,7.59991579 C10.4212692,7.96370526 10.0954781,8.21286316 9.74560008,8.18823158 C8.28432673,8.02686316 6.36324018,5.59402105 4.00426573,2.43012632 L3.59478803,1.88128421 C3.01762829,1.11075789 2.19187915,1.42465263 1.83489859,1.69623158 C1.65084979,1.83802105 1.40349562,2.12412632 1.52362143,2.29117895 C1.88430766,2.79265263 3.37831453,5.26465263 3.54784941,5.54475789 C3.58027411,5.59907368 3.60497865,5.65717895 3.62134541,5.71875789 C3.87240526,6.66233684 4.96712505,8.00096842 6.11341555,8.76328421 C6.41388448,8.96286316 6.49849752,9.37370526 6.30302287,9.68096842 C6.17857377,9.87581053 5.97074685,9.98191579 5.75890545,9.98191579"
                    id="Fill-17"
                    fill={hoverColor}
                    fillRule="nonzero"
                    mask="url(#mask-2)"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
              <path
                d="M17.846414,16.3825263 L10.5857507,6.85705263 C10.0527503,6.15884211 9.01114525,6.05652632 8.25889211,6.63 C7.50509493,7.2 7.32753107,8.22884211 7.85960503,8.92642105 L15.1196508,18.45 L7.45568586,9.92115789"
                id="Fill-20"
                fill="#ffffff00"
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M10.2275658,17.9059579 L5.94596073,12.2883789 C5.41326916,11.5908 5.59299466,10.5619579 6.34586542,9.99195789 C7.0996626,9.41848421 8.18419177,9.48827368 8.7150305,10.1845895"
                id="Fill-22"
                fill="#ffffff00"
                fillRule="nonzero"
              ></path>{" "}
              <line
                x1="12.2360137"
                y1="20.5389789"
                x2="10.2275349"
                y2="17.9059263"
                id="Fill-24"
                fill="#ffffff00"
                fillRule="nonzero"
              ></line>{" "}
              <path
                d="M12.3294895,9.17611579 C11.7974156,8.48043158 12.0333439,7.40706316 12.8578578,6.77990526 C13.6829893,6.15622105 14.7848117,6.21369474 15.3156504,6.90937895 L22.2841826,16.0502211 C23.0382886,13.7370632 23.1636641,13.6243263 23.5255856,13.0606421 C24.3831418,11.7295895 26.3060812,12.1865368 25.7956237,14.3699053 C25.1829512,16.9938 24.0539539,21.8231684 24.8089863,22.9795895 L17.9423603,28.9985368 C17.4569161,28.7478 17.578586,28.4178 15.7618761,28.1162211 C14.15639,27.8478 13.9464014,27.5733789 13.0567293,26.4052737 L4.47004994,15.1416947 C3.93797598,14.4447474 4.0352501,13.4787474 4.68467061,12.9842211 C5.33501754,12.4919053 6.1848536,12.7379053 6.71661876,13.4367474"
                id="Fill-26"
                fill="#ffffff00"
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M12.8150263,16.1099053 C12.6220221,16.1099053 12.4308708,16.0224316 12.3036424,15.8544316 L7.31734045,9.31853684 C6.96653603,8.85969474 6.81552955,8.2818 6.89334884,7.69348421 C6.97734426,7.06190526 7.32351658,6.47453684 7.84323828,6.08043158 C8.8752703,5.29664211 10.3223385,5.45516842 11.0665627,6.4338 L16.1492124,13.0963263 C16.3693915,13.3849579 16.3193648,13.8018 16.0371155,14.0263263 C15.753631,14.2514842 15.3469325,14.1996947 15.1267533,13.9116947 L10.0428685,7.24916842 C9.72819443,6.83485263 9.08772932,6.7878 8.61587266,7.14622105 C8.37469462,7.32811579 8.21535036,7.59211579 8.17860236,7.87095789 C8.15698589,8.03453684 8.16717652,8.27674737 8.33918185,8.50127368 L13.325175,15.0390632 C13.5459718,15.3276947 13.4953275,15.7448526 13.2130782,15.9693789 C13.0948052,16.0641158 12.9542981,16.1099053 12.8150263,16.1099053"
                id="Fill-28"
                fill={hoverColor}
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M10.4736538,18.8594842 C10.2806496,18.8594842 10.0894983,18.7720105 9.96165231,18.6040105 L5.66244529,12.9636947 C5.31071445,12.5016947 5.161252,11.9238 5.23968891,11.3348526 C5.32399314,10.7058 5.66954785,10.1184316 6.18896073,9.72558947 C7.24940297,8.91716842 8.76564392,9.04853684 9.49844224,10.0148526 C9.7173862,10.3047474 9.66612429,10.7212737 9.38325734,10.9461158 C9.10039039,11.1693789 8.69183912,11.1163263 8.47289516,10.8276947 C8.17983759,10.4399053 7.44456881,10.4206421 6.96221273,10.7907474 C6.72103469,10.9726421 6.56169043,11.2360105 6.52494243,11.5135895 C6.50270835,11.6790632 6.51289897,11.9219053 6.68521311,12.1489579 L10.9844201,17.7886421 C11.2045993,18.0779053 11.153955,18.4944316 10.8717057,18.7189579 C10.7528151,18.8136947 10.6129257,18.8594842 10.4736538,18.8594842"
                id="Fill-30"
                fill={hoverColor}
                fillRule="nonzero"
              ></path>{" "}
              <path
                d="M18.1714949,29.9281579 C18.0732943,29.9281579 17.9741674,29.9054211 17.8809077,29.8571053 C17.6885212,29.7592105 17.5600576,29.6518421 17.4569161,29.5656316 C17.2673088,29.4086842 17.0526881,29.2299474 15.8838547,29.0363684 C14.1106866,28.7401579 13.7512356,28.359 12.7763328,27.0847895 L4.18471254,15.8167895 C3.81383568,15.3301579 3.64553603,14.7108947 3.72459055,14.1184737 C3.79932177,13.5522632 4.08404156,13.0555263 4.52656157,12.7195263 C5.44587915,12.0194211 6.76139573,12.2502632 7.52322188,13.2456316 C7.74309226,13.5342632 7.69306557,13.9511053 7.41081624,14.1768947 C7.12980213,14.4014211 6.72155966,14.3508947 6.50014525,14.0622632 C6.17682463,13.6378421 5.65030919,13.5168947 5.3010488,13.7834211 C5.1401605,13.9056316 5.03701906,14.0868947 5.00922646,14.2959474 C4.97649295,14.5406842 5.0478273,14.7911053 5.20778917,15.0007895 L13.7957038,26.2637368 C14.6523336,27.3851053 14.7409611,27.5016316 16.0919905,27.7274211 C17.4905761,27.9588947 17.8941864,28.2197368 18.2752539,28.5367895 C18.3580141,28.6059474 18.4000118,28.6397368 18.4633172,28.6728947 C18.7829321,28.8364737 18.9120133,29.2356316 18.7517427,29.5631053 C18.637793,29.7942632 18.409276,29.9281579 18.1714949,29.9281579"
                id="Fill-32"
                fill={hoverColor}
                fillRule="nonzero"
              ></path>{" "}
              <g id="Group-36" transform="translate(11.617042, 5.928158)">
                <g id="Fill-34-Clipped">
                  <mask id="mask-4" fill="white">
                    <use xlinkHref="#path-3"> </use>{" "}
                  </mask>{" "}
                  <g id="path-3"> </g>{" "}
                  <path
                    d="M13.4193809,17.9814947 C13.2100099,17.9814947 13.0043446,17.8779158 12.8789691,17.6856 C12.1159077,16.5130737 12.6297621,13.4492842 13.7745086,8.55454737 C13.9181037,7.94033684 13.8300938,7.4796 13.5441388,7.35202105 C13.3125337,7.24844211 12.939804,7.35675789 12.6763919,7.76444211 L12.6069104,7.87181053 C12.3277491,8.30538947 12.1872421,8.52328421 11.5091026,10.5986526 C11.4331361,10.8304421 11.2388967,11.0009684 11.0038948,11.0413895 C10.7685841,11.0846526 10.5298765,10.9883368 10.3825757,10.7960211 L3.41527869,1.65675789 C3.10523675,1.25096842 2.39096683,1.24781053 1.855496,1.65107368 C1.55379184,1.88065263 1.35553793,2.19928421 1.31199619,2.52644211 C1.29161494,2.68181053 1.2987175,2.90886316 1.45003279,3.10623158 C1.67021197,3.39486316 1.62018528,3.81170526 1.33793595,4.03749474 C1.05568662,4.26328421 0.648061761,4.21181053 0.427264964,3.92254737 C0.0931361037,3.4836 -0.049841403,2.92465263 0.0267426611,2.34738947 C0.116605414,1.66970526 0.501996188,1.02738947 1.08286161,0.585915789 C2.18838963,-0.250926316 3.6919695,-0.135663158 4.43804651,0.840757895 L10.6697659,9.01528421 C11.0678178,7.8756 11.2385879,7.58507368 11.5242341,7.14233684 L11.5918628,7.0356 C12.1751986,6.13623158 13.2124804,5.75823158 14.0604636,6.1356 C14.7673222,6.45012632 15.3945086,7.33149474 15.0356752,8.86370526 C14.6215654,10.6362316 13.3597812,16.0299158 13.959175,16.9501263 C14.1571201,17.2561263 14.0762127,17.6669684 13.7782143,17.8703368 C13.6679703,17.9451789 13.5429035,17.9814947 13.4193809,17.9814947"
                    id="Fill-34"
                    fill={hoverColor}
                    fillRule="nonzero"
                    mask="url(#mask-4)"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </svg>{" "}
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 0;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${props => `1px solid ${props.hoverColor}`};
  width: ${props => props.size}vh;
  height: ${props => props.size}vh;
`
export default Clap
