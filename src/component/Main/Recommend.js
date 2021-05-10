import React, { Component } from 'react'
import RecommendStyles from './Recommend.module.css';
import CardMedia from '@material-ui/core/CardMedia';
import lazania from '../../static/recipes/lazania.png';
import salatka_meksykanska from '../../static/recipes/salatka_meksykanska.png';
import salatka_makaronowa from '../../static/recipes/salatka_makaronowa.png';
import zapiekanka_z_bagietki from '../../static/recipes/zapiekanka_z_bagietki.png';



export default class Recommend extends Component {
  constructor(props) {
    super(props);
    
    this.state = { polecane: [] };
  }
  componentDidMount() {
        this.setState({ polecane: this.props.recipes});
  }
  render() {
    return (
        <div className={RecommendStyles.Container}>
        <h1 className={RecommendStyles.Zapchaj}>s</h1>
        <h1 >{this.props.t}</h1>
          <div className={RecommendStyles.Rec}>
            <CardMedia
              style={{
                height: '250px',
                width: '320px'
              }}
              image={lazania}
              title="lasagneBolognese"
            />
            
            <h3>{this.state.polecane[0]}</h3>
            <button type="button" className={RecommendStyles.Rec} onClick={() => window.location.replace("Details")}>Sprawdź </button>
          </div>
          <div className={RecommendStyles.Rec}>
            <CardMedia
              style={{
                height: '250px',
                width: '320px'
              }}
              image={salatka_meksykanska}
              title="salatka_meksykanska"
            />
            <h3>{this.state.polecane[1]}</h3>
            <button type="button" className={RecommendStyles.Rec} onClick={() => window.location.replace("Details")}>Sprawdź </button>
          </div>
          <div className={RecommendStyles.Rec}>
            <CardMedia
              style={{
                height: '250px',
                width: '320px'
              }}
              image={salatka_makaronowa}
              title="salatka_makaronowa"
            />
            <h3>{this.state.polecane[2]}</h3>
            <button type="button" className={RecommendStyles.Rec} onClick={() => window.location.replace("Details")}>Sprawdź </button>
          </div>

          <div className={RecommendStyles.Rec}>
            <CardMedia
              style={{
                height: '250px',
                width: '320px'
              }}
              image={zapiekanka_z_bagietki}
              title="zapiekanka_z_bagietki"
            />
            <h3>{this.state.polecane[3]}</h3>
            <button type="button" className={RecommendStyles.Rec} onClick={() => window.location.replace("Details")}>Sprawdź </button>
          </div>
        </div>
     
    )
  }
}
