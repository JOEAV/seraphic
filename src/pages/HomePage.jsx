import { SummaryBar } from "../components/SummaryBar";
import { sectionsData } from "../utils/dummyData";
const dummyData = Object.keys(sectionsData).reduce(
  (arr, key) => arr.concat(sectionsData[key]),
  []
);
const threeItemsBarData = dummyData.slice(0, 3);
const twoItemsBarData = dummyData.slice(3);
const oneItemBarData = dummyData.slice(4);
export function HomePage() {
  return (
    <div>
      <SummaryBar sectionsData={threeItemsBarData} />
      <SummaryBar sectionsData={twoItemsBarData} />
      <SummaryBar sectionsData={oneItemBarData} />
    </div>
  );
}
