import {
    InjectQueue,
    OnQueueActive,
    OnQueueCleaned,
    OnQueueCompleted,
    OnQueueDrained,
    OnQueueError,
    OnQueueFailed,
    OnQueuePaused,
    OnQueueProgress,
    OnQueueRemoved,
    OnQueueResumed,
    OnQueueStalled,
    OnQueueWaiting,
    Process,
    Processor,
  } from '@nestjs/bull';
  import { Job, Queue } from 'bull';
  
  @Processor('audio')
  export class QueneService {
  
    constructor(@InjectQueue('audio') private readonly taskQueue: Queue,
    
    ) {}
  
    @Process()
    async processTask(job: Job<number>) {
      // debugger
      // console.log('Processing', job.id, 'for', job.data, 'seconds');
      // await new Promise(resolve => {
      //   setTimeout(() => {
      //     resolve('');
      //   }, job.data * 1000);
      // });
      console.log('执行任务')
      console.log('Processing done', job.id);

      this.cleanOldJobs()
    }
  
    async cleanOldJobs() {
      (await this.taskQueue.getJobs(['completed'])).map(
        async job => await job.remove(),
      );
      (await this.taskQueue.getJobs(['failed'])).map(
        async job => await job.remove(),
      );
    }
    
    async showJobs() {
      console.log('----------------------------------------');
      console.log(
        'completedJobs',
        (await this.taskQueue.getJobs(['completed'])).map(job => job.id),
      );
      console.log(
        'waiting',
        (await this.taskQueue.getJobs(['waiting'])).map(job => job.id),
      );
      console.log(
        'paused',
        (await this.taskQueue.getJobs(['paused'])).map(job => job.id),
      );
      console.log(
        'failedJobs',
        (await this.taskQueue.getJobs(['failed'])).map(job => job.id),
      );
    }
  
    // @OnQueueActive()
    // onQueueActive(job: Job) {
    // debugger
    //   console.log('OnQueueActive', job.id);
    // }
  
    // @OnQueueError()
    // onQueueError(error: Error) {
    //   debugger
    //   console.log('OnQueueError', error);
    // }
  
    // @OnQueueWaiting()
    // onQueueWaiting(jobId: number | string) {
      
    //   console.log('OnQueueWaiting', jobId);
    //   console.log('执行操作')
    //   return 'a'
    // }
  
    // @OnQueueStalled()
    // onQueueStalled(job: Job) {
    //     debugger
    //   console.log('OnQueueStalled', job.id);
    // }
  
    // @OnQueueProgress()
    // onQueueProgress(job: Job) {
    //     debugger
    //   console.log('OnQueueProgress', job.id);
    // }
  
    // @OnQueueCompleted()
    // onQueueCompleted(job: Job, result: any) {
    //     debugger
    //   console.log('OnQueueCompleted', job.id, result);
    // }
  
    // @OnQueueFailed()
    // onQueueFailed(job: Job, err: Error) {
    //     debugger
    //   console.log('onQueueFailed', job.id, err);
    // }
  
    // @OnQueuePaused()
    // onQueuePaused() {
    //     debugger
    //   console.log('OnQueuePaused');
    // }
  
    // @OnQueueResumed()
    // onQueueResumed() {
    //     debugger
    //   console.log('OnQueueResumed');
    // }
  
    @OnQueueCleaned()
    onQueueCleaned(jobs: Job[], type: string) {
      console.log('OnQueueCleaned', jobs, type);
    }
  
    // @OnQueueDrained()
    // onQueueDrained() {
    //     debugger
    //   console.log('OnQueueDrained');
    // }
  
    // @OnQueueRemoved()
    // onQueueRemoved(job: Job) {
    //     debugger
    //   console.log('OnQueueRemoved', job.id);
    // }
    async addTask () {
        this.taskQueue.add( {
            foo: 'bar',
            type:'setMessage'
          });
    }
  }