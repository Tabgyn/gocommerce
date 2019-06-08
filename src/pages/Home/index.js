import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryActions from '~/store/ducks/categories';

import {
  Container,
  MenuCategoria,
  MenuList,
  MenuItem,
  MenuItemText,
  ProductList,
  ProductItem,
  ProductImage,
  ProductName,
  ProductBrand,
  ProductPrice,
} from './styles';
import { colors } from '~/styles';

class Home extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    headerTitleStyle: {
      color: colors.primary,
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerBackTitle: null,
  };

  componentDidMount() {
    const { categories, loadCategoriesRequest, setCurrent } = this.props;

    loadCategoriesRequest();
    setCurrent(categories.currentCategory);
  }

  handleCategoryPress = (id) => {
    const { setCurrent } = this.props;

    setCurrent(id);
  };

  handleItemPress = (product) => {
    const { navigation } = this.props;

    navigation.navigate('Detalhe', { product });
  };

  renderProductItem = ({ item }) => (
    <ProductItem onPress={() => this.handleItemPress(item)}>
      <ProductImage source={{ uri: item.image }} />
      <ProductName>{item.name}</ProductName>
      <ProductBrand>{item.brand}</ProductBrand>
      <NumberFormat
        value={item.price}
        displayType="text"
        prefix="R$"
        decimalSeparator=","
        renderText={value => <ProductPrice>{value}</ProductPrice>}
      />
    </ProductItem>
  );

  render() {
    const { categories } = this.props;

    return (
      <>
        <MenuCategoria>
          <MenuList horizontal showsHorizontalScrollIndicator={false}>
            {!!categories.data
              && categories.data.map(category => (
                <MenuItem
                  key={category.id}
                  onPress={() => this.handleCategoryPress(category.id)}
                  active={categories.currentCategory && categories.currentCategory === category.id}
                >
                  <MenuItemText active={categories.currentCategory && categories.currentCategory === category.id}>
                    {category.title}
                  </MenuItemText>
                </MenuItem>
              ))}
          </MenuList>
        </MenuCategoria>
        <Container>
          {!!categories.categoryProducts && (
            <ProductList
              data={categories.categoryProducts}
              keyExtractor={item => String(item.id)}
              renderItem={this.renderProductItem}
              numColumns={2}
            />
          )}
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
