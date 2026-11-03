import "@/app/ui/global.css";
// 이것두 의존성땜에 생긴 문제에용
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  // RootLayout : children을 바디에 넣겠다 -> 모든공통된 레이아웃을 여기에 다 넣겠다! -> 모든 페이지에 적용됨 / 레이아웃 = css
  children,
}: {
  children: React.ReactNode; //돔구조를 받을 수 있는 모듈 -> 돔구조를 입히려고 이걸 받음 / 노드가 왜 붙냐? 트리의 구성요소가 노드에요
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
// 같은 UI를 적용 시키기 위해 대쉬보드 안에 커스터머랑 인볼스를 만든거에요 대쉬보드에 레이아웃을 적용하면 커스터머랑 인볼스에도 적용되니까용 -> 콜로케이션
