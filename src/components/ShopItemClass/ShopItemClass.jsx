import React, { Component } from 'react';
import AppStyle from '../../App.module.css';

export class ShopItemClass extends Component {
  render() {
    const { brand, title, description, descriptionFull, currency, price } = this.props.item

    return (
      <>
        <div class={AppStyle.mainContent}>
          <h2>{brand}</h2>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <div className={AppStyle.description}>
            {descriptionFull}
          </div>
          <div className={`${AppStyle.highlightWindow}${AppStyle.mobile}`}><div className={AppStyle.highlightOverlay}></div></div>
          <div className={AppStyle.divider}></div>
          <div className={AppStyle.purchaseInfo}>
            <div className={AppStyle.price}>{currency}{price}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </>
    )
  }
}