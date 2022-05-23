import React, {Component} from 'react';
import './Splash.css';
import { ReactComponent as Signature } from './signature.svg';

function LoadingMessage() {
    return (
        <div>
            <Signature/>
        </div>
    );
}

function withSplash(WrappedComponent: any) {
    return class extends Component {
        constructor(props: any) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 4000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            // @ts-ignore
            if (this.state.loading) return LoadingMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default withSplash;
