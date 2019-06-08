import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
import { colors } from '~/styles';

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

  handleAddProduct = (product) => {
    const { addProductRequest, navigation } = this.props;

    addProductRequest(product);
    navigation.navigate('Carrinho');
  };

  render() {
    const { navigation } = this.props;
    const product = navigation.getParam('product');
    return (
      <Container>
        <ProductItem>
          <ProductImage
            source={{
              uri: product.image,
            }}
          />
          <ProductDetail>
            <ProductLabels>
              <ProductName>{product.name}</ProductName>
              <ProductBrand>{product.brand}</ProductBrand>
            </ProductLabels>
            <NumberFormat
              value={product.price}
              displayType="text"
              prefix="R$"
              decimalSeparator=","
              renderText={value => <ProductPrice>{value}</ProductPrice>}
            />
          </ProductDetail>
          <ButtonAdd onPress={() => this.handleAddProduct(product)}>
            <ButtonAddText>Adicionar ao carrinho</ButtonAddText>
          </ButtonAdd>
        </ProductItem>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detalhe);
