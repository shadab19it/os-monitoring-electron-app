import React, { FC } from "react";
import os from "os-utils";
import { Button, Col, Row } from "antd";
import "./OsInfo.scss";
import { useHistory } from "react-router-dom";

interface IState {
  cpuUsage: string;
  totalMem: string;
  memUsage: string;
  freeMem: string;
}
export const getPercentage = (frac: number) => {
  return `${(frac * 100).toFixed(0)}%`;
};

export const bytesToSize = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 B";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10);
  if (i === 0) return `${bytes} ${sizes[i]}`;
  return `${((bytes / 1024) * i).toFixed(1)} ${sizes[3]}`;
};

const OsInfo: FC = () => {
  const history = useHistory();
  const [state, setState] = React.useState<IState>({
    cpuUsage: "55",
    totalMem: "55",
    memUsage: "35",
    freeMem: "75",
  });

  const getCpuUsage = (onSuccess: (v: string) => void) => {
    os.cpuUsage((v: number) => {
      onSuccess(getPercentage(v));
    });
  };

  React.useEffect(() => {
    setState({ ...state, totalMem: bytesToSize(os.totalmem()) });
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => {
      getCpuUsage((v) => {
        setState((prv) => ({ ...prv, cpuUsage: v, freeMem: bytesToSize(os.freemem()) }));
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className='os-stats-wrapper'>
      <div className='stats-header' onClick={() => history.push("/about")}>
        Os Stats Info
      </div>
      <div className='os-stats-cards'>
        <Row gutter={16} align='middle' justify='center'>
          <Col span={8}>
            <div className='stats-card'>
              <div className='stats-value'>{state.totalMem}</div>
              <div className='divider'></div>
              <div className='stats-label'>Total MEM</div>
            </div>
          </Col>
          <Col span={8}>
            <div className='stats-card'>
              <div className='stats-value'>{state.cpuUsage}</div>
              <div className='divider'></div>
              <div className='stats-label'>CPU Usages</div>
            </div>
          </Col>
          <Col span={8}>
            <div className='stats-card'>
              <div className='stats-value'>{state.freeMem}</div>
              <div className='divider'></div>
              <div className='stats-label'>MEM Left</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OsInfo;
