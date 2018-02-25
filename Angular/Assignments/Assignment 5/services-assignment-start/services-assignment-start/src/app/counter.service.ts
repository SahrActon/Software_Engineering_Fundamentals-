
export class CounterService {

  counterActive = 0;
  counterInActive = 0;

  incrementActiveToInactive() {
    this.counterActive++;
    console.log('Active to InActive:' +  this.counterActive);

  }

  incrementInActiveToActive() {
    this.counterInActive++;
    console.log('InActive to Active:' +  this.counterActive);

  }
}
