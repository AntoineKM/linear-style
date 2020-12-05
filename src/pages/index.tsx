import { ThemeCardGrid } from "../components/ThemeCard";
import { useLinearThemes } from "../core/hooks";
import { Theme } from "../molecules/Theme";

export default function Index() {
  const { data: themes } = useLinearThemes();

  if (!themes) return <div>Loading</div>;

  return (
    <div className={"app"}>
      <h1 className={"title"}>Linear Style</h1>
      <ThemeCardGrid>
        {Object.entries(themes).map((theme) => {
          return <Theme theme={theme} />;
        })}
      </ThemeCardGrid>
    </div>
  );
}
