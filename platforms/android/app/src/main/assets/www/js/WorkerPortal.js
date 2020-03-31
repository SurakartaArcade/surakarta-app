import AnalysisWorker from './AnalysisWorker.worker' // eslint-disable-line import/default

export const WorkerPortal = {
  get analysis () {
    if (!this._analysis) {
      this._analysis = new AnalysisWorker()
    }

    return this._analysis
  }
}

export default WorkerPortal
