import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

export default (C, opt) => {

    const CONTAINER = document.getElementById('x-modal-container') || document.querySelector('body');

    let oModal = document.createElement('div');
    let _opt = {
        className: '',
        backDrop: false,
        size: 'md',
        data: null
    };

    Object.assign(_opt, opt);

    CONTAINER.appendChild(oModal);

    return new Promise((resolve, reject) => {

        class Modal extends React.Component {
            constructor() {
                super();
                this.state = {
                    className: ''
                };
                this.timer = null;
            }

            componentDidMount() {
                this.timer = window.setTimeout(() => {
                    this.setState({
                        className: 'x-modal-fade'
                    });
                }, 50);
            }

            bindEscFn(e) {
                e.key === 'Escape' && this.cancel();
            }

            close() {
                ReactDOM.unmountComponentAtNode(oModal);
                CONTAINER.removeChild(oModal);
                clearTimeout(this.timer);
                this.timer = null;
            }

            confirm(res = 'success') {
                this.close();
                resolve(res);
            }

            cancel(res = 'cancel') {
                this.close();
                reject(res);
            }

            render() {
                return (
                    <div className={classnames('x-modal', _opt.className, this.state.className)}>
                        <div className="x-modal-bg" onClick={() => {
                            _opt.backDrop && this.cancel();
                        }}></div>
                        <div className={`x-modal-content x-modal-${_opt.size}`}>
                            <C confirm={this.confirm.bind(this)} cancel={this.cancel.bind(this)} data={_opt.data}/>
                        </div>
                    </div>
                )
            }
        }

        ReactDOM.render(<Modal/>, oModal);
    });
}
