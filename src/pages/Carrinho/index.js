import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/store/ducks/cart';

import {
  Container,
  ProductList,
  ProductItem,
  ProductDetail,
  ProductImage,
  ProductLabels,
  ProductName,
  ProductBrand,
  ProductPrice,
  ProductActions,
  ProductAmount,
  SubTotalContainer,
  SubTotalLabel,
  SubTotalValue,
} from './styles';
import { colors } from '~/styles';

class Carrinho extends Component {
  static navigationOptions = {
    title: 'Carrinho',
    headerTitleStyle: {
      color: colors.primary,
      fontSize: 20,
      fontWeight: 'bold',
    },
  };

  componentDidMount() {
    const { loadCartRequest } = this.props;

    loadCartRequest();
  }

  renderProductItem = ({ item }) => (
    <ProductItem onPress={() => this.handleItemPress(item)}>
      <ProductDetail>
        <ProductImage source={{ uri: item.image }} />
        <ProductLabels>
          <ProductName>{item.name}</ProductName>
          <ProductBrand>{item.brand}</ProductBrand>
          <NumberFormat
            value={item.price}
            displayType="text"
            prefix="R$"
            decimalSeparator=","
            renderText={value => <ProductPrice>{value}</ProductPrice>}
          />
        </ProductLabels>
      </ProductDetail>
      <ProductActions>
        <ProductAmount>1</ProductAmount>
        <Icon name="times" size={16} color="#999" />
      </ProductActions>
    </ProductItem>
  );

  render() {
    const { cart } = this.props;
    return (
      <>
        <Container>
          {!!cart.data && (
            <ProductList data={cart.data} keyExtractor={item => String(item.id)} renderItem={this.renderProductItem} />
          )}
        </Container>
        <SubTotalContainer>
          <SubTotalLabel>Subtotal</SubTotalLabel>
          <NumberFormat
            value={cart.subtotal}
            displayType="text"
            prefix="R$"
            decimalSeparator=","
            renderText={value => <SubTotalValue>{value}</SubTotalValue>}
          />
        </SubTotalContainer>
      </>
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
)(Carrinho);
