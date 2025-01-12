import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import StyledComponentsRegistry from './registry';
import { GlobalStyle } from '../styles/GlobalStyles';

const font = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: '카페인',
  description: '편리한 전기차 충전소 서비스',
  icons: ['/favicon.ico'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
