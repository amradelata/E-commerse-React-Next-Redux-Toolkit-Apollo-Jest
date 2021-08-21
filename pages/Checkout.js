import styles from "./Checkout.module.css";

const Checkout = () => {
  const steps = ["shipping", "payment", "done"];
  return (
    <>
      <div className={styles.stepsBar}>
        <div className={styles.step}>
          {steps.map((item, index) => (
            <div className={styles.circle}>
              <div className={styles.stepName}>{item}</div>
              <div className={styles.number}>{index + 1}</div>
              <img src="/./icons/checked.svg" />
            </div>
          ))}
          <div className={styles.line}></div>
        </div>
      </div>
      {/* <div class="steps_bar">
  <div class="step" *ngFor="let step of steps; index as i" [class.active]="stepNumber == i + 1" [class.done]="stepNumber > i + 1">
    <div class="circle">
      <div class="step_name">{{step}}</div>
      <div class="number" *ngIf="stepNumber == i + 1 || stepNumber < i + 1">{{i + 1}}</div>
      <img src="assets/svg/checked.svg" alt="This step is done" *ngIf="stepNumber > i + 1">
    </div>
    <div class="line"></div>
  </div>
</div> */}
    </>
  );
};

export default Checkout;
