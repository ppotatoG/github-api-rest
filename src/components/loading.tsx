import 'styles/loading.scss';

const Loading = ({isLoading} : any) => {
    const LoadingComponent = () : JSX.Element | null => {
        if(isLoading) {
            return (
                <div className="loading">
                    <div className="loadingio-spinner-spinner-fi70xeirlmk">
                        <div className="ldio-h1i410tahtn">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )
        }
        else return null;
    }
    return (
         <LoadingComponent/>
    );
}

export default Loading;