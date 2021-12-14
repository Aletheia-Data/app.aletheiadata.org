import React from "react";
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  ListsWidget2,
  MixedWidget1,
  TablesWidget3,
} from "../../../../_start/partials/widgets";

export function Overview() {
  return (
    <div className="row g-5 g-xxl-8">
      <div className="col-xl-6">
        <FeedsWidget2 className="mb-5 mb-xxl-8" />
        <FeedsWidget3 className="mb-5 mb-xxl-8" />
        <FeedsWidget4 className="mb-0 mb-xxl-8" />
      </div>
      <div className="col-xl-6">
        <TablesWidget3 className="mb-5 mb-xxl-8" />
        <MixedWidget1 className="mb-5 mb-xxl-8" />
        <ListsWidget2 className="mb-5 mb-xxl-8" />
      </div>
    </div>
  );
}
