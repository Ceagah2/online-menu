import { ContainerProps } from '@/types';
import * as S from './styles';
const Container = ({ children }: ContainerProps) => {
  return <S.MainContent>{children}</S.MainContent>;
};

export default Container;
