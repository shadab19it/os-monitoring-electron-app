import React, { FC } from "react";
import { Button, Card } from "antd";
import "./UpgradePlan.scss";
import { MemberType } from "../../appContext/appContext";

const PlanHeader: FC<{ title: string; price: string }> = ({ title, price }) => {
  return (
    <div className='plan-label'>
      {title} <span className='plan-price'>{price}</span>
    </div>
  );
};

const UpgradePlan: FC<{ onSelectPlan: (plan: MemberType) => void }> = ({ onSelectPlan }) => {
  return (
    <div className='upgrade-plan-wrapper'>
      <div className='header-title'>Upgrade Your Plan </div>
      <div className='plan-cards'>
        <div className='plan-card'>
          <Card
            title={<PlanHeader title='Gold' price='$55' />}
            extra={
              <Button color='#ffbb02' type='primary' onClick={() => onSelectPlan("gold")}>
                Activate
              </Button>
            }
            style={{ width: "100%" }}>
            <p>Get the access 10 project</p>
            <p>All Support </p>
          </Card>
        </div>
        <div className='plan-card'>
          <Card
            title={<PlanHeader title='Enterprises' price='$85' />}
            extra={
              <Button size='large' type='primary' onClick={() => onSelectPlan("enterprises")}>
                Activate
              </Button>
            }
            style={{ width: "100%" }}>
            <p>Get the access Unlimited project</p>
            <p>All Support </p>
          </Card>
        </div>
        <div className='plan-card'>
          <Card
            title={<PlanHeader title='Basic' price='$15' />}
            extra={
              <Button type='primary' onClick={() => onSelectPlan("basic")}>
                Activate
              </Button>
            }
            style={{ width: "100%" }}>
            <p>Get the access 3 project</p>
            <p>No Support </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlan;
