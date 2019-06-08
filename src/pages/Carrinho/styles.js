import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;

  background: ${colors.lighter};
  padding: ${metrics.basePadding}px ${metrics.basePadding / 2}px;
`;

export const ProductList = styled.FlatList``;

export const ProductItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${metrics.screenWidth - 40}px;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding}px;
  margin-left: ${metrics.baseMargin}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 60px;
  height: 60px;
`;

export const ProductDetail = styled.View`
  flex-direction: row;
`;

export const ProductLabels = styled.View`
  flex-direction: column;
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

export const ProductActions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductAmount = styled.TextInput`
  margin-right: ${metrics.baseMargin * 2}px;
  border: 1px solid ${colors.regular};
  border-radius: ${metrics.baseRadius};
  width: 40px;
  padding: ${metrics.basePadding / 4}px;
  color: ${colors.regular};
`;

export const SubTotalContainer = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 150px;
  background: ${colors.white};
`;

export const SubTotalLabel = styled.Text`
  font-size: 14px;
  color: ${colors.regular};
`;

export const SubTotalValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secundary};
`;
