import { Header } from "../../components/Header";

export const EquipmentPage = () => {
  return (
    <>
      <Header />

      <section className="equipment_section">
        <div className="cameras">
          <h1>Cinema Cameras</h1>
          <ul>
            <li>Sony FX6</li>
            <li>Digital Bolex D16</li>
            <li>Canon C300 Mark III</li>
          </ul>
        </div>

        <div className="sound">
          <ul>
            <li>Sennheiser 416 shotgun mic</li>
            <li>Shure MiniCMIT short shotgun </li>
            <li>Sennheiser G3 lavaliers</li>
            <li>SoundDevices MM1 boom operator box</li>
          </ul>
        </div>

        <div className="lenses">
          <h1>Sony Lenses</h1>
          <ul>
            <li>Sony 16-35 f2.8</li>
            <li>Sony 24-105 f4</li>
          </ul>
        </div>

        <div className="contax">
          <ul>
            <li>Contax 18mm f4</li>
            <li>Contax 28mm f2.8</li>
            <li>Contax 35mm f2.8</li>
            <li>Contax 50mm f1.4 </li>
            <li>Contax 35-70mm f3.5 </li>
          </ul>
        </div>

        <div className="super_lenses">
          <ul>
            <li>Canon 8-64mm</li>
            <li>Kinoptik 5.7mm</li>
            <li>Kern Switar 10, 16, 25mm</li>
            <li>Angenieux 15-150mm zoom</li>
          </ul>
        </div>

        <div className="canon_lenses">
            <ul>
                <li>Canon L 16-35mm f2.8</li>
                <li>Canon L 24-70 f2.8</li>
                <li>Canon L 24-105 f4</li>
                <li>Zeiss 85mm f1.4</li>
            </ul>
        </div>

        <div className="monitoring">
            <ul>
                <li>SmallHD 702 monitor</li>
                <li>Zacuto Z-finder</li>
            </ul>
        </div>

        <div className="lighting">
            <ul>
                <li>Lightbridge Cine Reflectors</li>
                <li>Arri 650 fresnel x2</li>
                <li>Quasar Crossfade x2</li>
                <li>Aputure 60x</li>
                <li>Polysilk 8x8</li>
            </ul>
        </div>

        <div className="misc">
            <ul>
                <li>Wooden Camera UMB-1 mattebox</li>
                <li>EasyRig Vario 5 + Stabil Arm</li>
            </ul>
        </div>
      </section>
    </>
  );
};
