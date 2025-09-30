import { KpiItem, type KpiItemType } from "dataviz-components";
import type { SettingsKpiRecord } from "../../graphql/types";

type KpiProps = {
  data: SettingsKpiRecord;
};

export const Kpi = ({ data }: KpiProps) => {
  return (
    <div className="containter-xxl py-4 px-0">
      {data.title && (
        <h3 className="mid-caption--lead fw-semibold text-black">
          {data.title}
        </h3>
      )}
      {data.subtitle && <p className="mid-caption--large">{data.subtitle}</p>}
      <div className="row">
        {data.selectKpi?.map((item, index) => {
          return (
            <div key={index} className="col">
              <KpiItem data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
