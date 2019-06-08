import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.lighter};
  padding: ${metrics.basePadding}px ${metrics.basePadding / 2}px;
`;

export const ProductItem = styled.View`
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
  width: 100%;
  height: 400px;
  margin-bottom: ${metrics.baseMargin * 2}px;
`;

export const ProductDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ProductLabels = styled.View``;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darker};
`;

export const ProductBrand = styled.Text`
  font-size: 14px;
  color: ${colors.regular};
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secundary};
  margin-top: ${metrics.baseMargin}px;
`;

export const ButtonAdd = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;

  margin: ${metrics.baseMargin * 2}px 0 0;
  padding: ${metrics.basePadding}px;
  background: ${colors.secundary};
  width: 100%;
  border-radius: ${metrics.baseRadius};
`;

export const ButtonAddText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`;
