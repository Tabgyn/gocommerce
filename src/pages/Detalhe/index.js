import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductActions from '~/store/ducks/products';
import CartActions from '~/store/ducks/cart';

import {
  Container,
  ProductItem,
  ProductImage,
  ProductDetail,
  ProductLabels,
  ProductName,
  ProductBrand,
  ProductPrice,
  ButtonAdd,
  ButtonAddText,
} from './styles';
import { colors, metrics } from '~/styles';

class Detalhe extends Component {
  static navigationOptions = {
    title: 'Detalhe do produto',
    headerTitleStyle: {
      color: colors.primary,
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerTintColor: colors.light,
  };

  static propTypes = {
    products: PropTypes.shape({}).isRequired,
    loadProductRequest: PropTypes.func.isRequired,
    addProductRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { loadProductRequest, navigation } = this.props;
    const id = navigation.getParam('id');

    loadProductRequest(id);
  }

  handleAddProduct = (product) => {
    const { addProductRequest, navigation } = this.props;

    addProductRequest(product);
    navigation.navigate('Carrinho');
  };

  render() {
    const { products } = this.props;
    return (
      <Container>
        {products.loading ? (
          <ActivityIndicator style={{ marginTop: metrics.baseMargin * 2 }} />
        ) : (
          !!products.selectedProduct && (
            <ProductItem>
              <ProductImage
                source={{
                  uri: products.selectedProduct.image,
                }}
              />
              <ProductDetail>
                <ProductLabels>
                  <ProductName>{products.selectedProduct.name}</ProductName>
                  <ProductBrand>{products.selectedProduct.brand}</ProductBrand>
                </ProductLabels>
                <NumberFormat
                  value={products.selectedProduct.price}
                  displayType="text"
                  prefix="R$"
                  decimalSeparator=","
                  renderText={value => <ProductPrice>{value}</ProductPrice>}
                />
              </ProductDetail>
              <ButtonAdd onPress={() => this.handleAddProduct(products.selectedProduct)}>
                <ButtonAddText>Adicionar ao carrinho</ButtonAddText>
              </ButtonAdd>
            </ProductItem>
          )
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detalhe);
