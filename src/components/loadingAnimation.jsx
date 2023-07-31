import styles from './loadingAnimation.module.css';

export const LoadingAnimation = () => {
    return (
        <div className='ml-auto mr-auto'>
            <div class="loader-wrapper">
              <div class="loader is-loading"></div>
            </div>
        </div>
    );
};