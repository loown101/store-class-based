import AppStyle from './App.module.css';
import { ShopItemClass } from './components/ShopItemClass/ShopItemClass'

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  return (
    <div className={AppStyle.container}>
      <div className={AppStyle.backgroundElement}>
      </div>
      <div className={AppStyle.highlightWindow}>
        <div className={AppStyle.highlightOverlay}></div>
      </div>
      <div className={AppStyle.window}>
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}

export default App;
