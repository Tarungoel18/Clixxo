import React from "react";
import {
  LAN_INTERFACES,
  SYSTEM_INFO,
  VERSION_INFO,
} from "../constants/SystemInfoConstants";

const InfoRow = ({ label, values, isIndented = false }) => (
  <div
    className={`grid grid-cols-12 gap-4 text-sm ${isIndented ? "pl-6" : ""}`}
  >
    <div className="col-span-3">{label}</div>
    {Array.isArray(values) ? (
      values.map((value, idx) => (
        <div key={idx} className="col-span-3">
          {value || ""}
        </div>
      ))
    ) : (
      <div className="col-span-9">{values}</div>
    )}
  </div>
);

const LanSection = ({ name, data }) => (
  <div className="p-4 border-b">
    <h3 className="font-semibold text-gray-700 mb-3">{name}</h3>
    <div className="space-y-2">
      {Object.entries(data).map(([key, value]) => (
        <InfoRow key={key} label={key} values={value} />
      ))}
    </div>
  </div>
);

const SystemInfo = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-blue-500 text-white px-4 py-2 mb-4 rounded-t">
        <h2 className="text-lg font-semibold text-center">System Info</h2>
      </div>

      <div className="bg-white rounded shadow-sm">
        {LAN_INTERFACES.map((lan) => (
          <LanSection key={lan.name} name={lan.name} data={lan.data} />
        ))}

        <div className="p-4 space-y-4">
          {SYSTEM_INFO.map((info, idx) => (
            <div key={idx}>
              <InfoRow label={info.label} values={info.value} />
              {info.extra && (
                <div className="grid grid-cols-12 gap-4 text-sm">
                  <div className="col-span-6"></div>
                  <div className="col-span-6">
                    {info.extra.map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <InfoRow label="Current Version" values="" />
          {VERSION_INFO.map((version, idx) => (
            <InfoRow
              key={idx}
              label={version.label}
              values={version.value}
              isIndented
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
