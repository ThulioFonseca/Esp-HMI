import { useState } from "react";
import "./style.css";
import Card from "../../containers/Card/Card";
import ToggleSwitch from "../../inputs/ToggleSwitch/ToggleSwitch";
import HttpService from "../../../services/HttpService";

export default function DigitalOutputController({
  active,
  type,
  label,
  id,
  icon,
  onChange,
}) {
  const [isSwitchOn, setIsSwitchOn] = useState(active);

  const handleSwitchChange = (newState) => {
    setIsSwitchOn(newState);
    if (newState) {
      onChange(id, newState);
      console.log(`Switch ativado! ID: ${id}`);
    } else {
      onChange(id, newState);

      console.log(`Switch desativado! ID: ${id}`);
    }
  };

  return (
    <Card size={"sm"}>
      {type === "toggle" && (
        <div>
          <div className="doc-device-icon-dark">
            <span
              style={{ fontSize: "3.5vw" }}
              className={
                isSwitchOn
                  ? "material-icons-outlined doc-icon-active "
                  : "material-icons-outlined doc-icon-inactive"
              }
            >
              {icon}
            </span>
            <h4 className="doc-label">{label}</h4>
          </div>

          <div className="doc-button">
            <span>
              <ToggleSwitch active={isSwitchOn} onChange={handleSwitchChange} />
            </span>
          </div>
        </div>
      )}
    </Card>
  );
}
