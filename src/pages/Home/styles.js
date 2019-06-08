import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.lighter};
  padding: ${metrics.basePadding}px ${metrics.basePadding / 2}px;
`;

export const MenuCategoria = styled.View`
  height: 60px;
  background: ${colors.primary};
  padding: 0 ${metrics.basePadding}px;
`;

export const MenuList = styled.ScrollView.attrs({
  contentContainerStyle: {},
})``;

export const MenuItem = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  justify-content: center;

  height: 100%;
  padding: 0 ${metrics.basePadding / 2}px;
  border-bottom-width: ${({ active }) => (active ? 5 : 0)};
  border-bottom-color: ${({ active }) => (active ? colors.white : colors.transparent)};
`;

export const MenuItemText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ active }) => (active ? colors.white : colors.whiteTransparent)};
  text-transform: uppercase;
`;

export const ProductList = styled.FlatList``;

export const ProductItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: ${(metrics.screenWidth - 50) / 2}px;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding / 2}px;
  margin-left: ${metrics.baseMargin}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 200px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.darker};
`;

export const ProductBrand = styled.Text`
  font-size: 12px;
  color: ${colors.regular};
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.secundary};
  margin-top: ${metrics.baseMargin}px;
`;
