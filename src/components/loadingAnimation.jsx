import styles from './loadingAnimation.module.css';

export const LoadingAnimation = () => {
    return (
        <div className='ml-auto mr-auto'>
            <div className="loader-wrapper">
              <div className="loader is-loading"></div>
            </div>
        </div>
    );
};