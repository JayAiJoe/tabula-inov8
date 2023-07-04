import { getAllProjectIds, getProjectData } from '../../lib/prismaHelpers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import OptionSet from '../../components/optionSet';
import { toLowerNoSpace } from '../../lib/utils';
import ProjectImageSmall from '../../components/projectImageSmall';


export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id);
    return {
      props: {
        projectData
      }
    };
  }

export async function getStaticPaths() {
    const paths = await getAllProjectIds();
    return {
      paths,
      fallback: false,
    };
  }


export default function Project({ projectData }) {
    return (
      <>
        <section className='section is-clipped'>
          <div className='container'>
            <div className='mb-24 columns is-multiline'>
              <div className='column is-6 p-1 mb-0-tablet mb-8'>
                <div className='mb-10 is-relative' style={{ height: 564 }}>
                  <button
                    className='button is-ghost p-0 ml-8 is-absolute is-top-0 is-left-0'
                    style={{ zIndex: 10, top: '50%' }}
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={10}
                      height={18}
                      viewBox='0 0 10 18'
                      fill='none'
                      className=''
                    >
                      <path
                        d='M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z'
                        fill='#212529'
                      />
                    </svg>
                  </button>
                  <figure class="image is-4by3">
                    <img src={`/images/${toLowerNoSpace(projectData.name)}/1.png`}/>
                  </figure>
                  <button
                    className='button is-ghost p-0 mr-8 is-absolute is-top-0 is-right-0'
                    style={{ top: '50%' }}
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={10}
                      height={18}
                      viewBox='0 0 10 18'
                      fill='none'
                      className=''
                    >
                      <path
                        d='M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z'
                        fill='#212529'
                        className=''
                      />
                    </svg>
                  </button>
                </div>
                <div className='columns is-mobile is-multiline'>
                  

                
                {
                  [1,2,3,4].map((item,index)=>{
                    return <ProjectImageSmall name={toLowerNoSpace(projectData.name)} index={item} />
                  })
                }
                    
                  

                </div>
              </div>
              <div className='column is-6'>
                <div className='pl-20-desktop'>
                  <div className=''>
                    <span className='has-text-grey-dark is-size-4'>{projectData.designer}</span>
                    <h1 className='title is-1 is-size-2-touch has-leading-2 has-mw-xl mt-2 mb-6 has-text-white'>
                    {projectData.name}
                    </h1>
                    <div className='mb-8'>
                      <progress
                        className='progress is-info'
                        value={projectData.takenUnits}
                        max={projectData.maxUnits}
                      />
                    </div>
                    <p className='mb-8 is-inline-block'>
                      <span className='has-text-weight-bold is-size-3'>
                        P{projectData.price.toFixed(2).toLocaleString('en-US')}
                      </span>
                      <span class="is-size-4 ml-4 has-text-grey">{projectData.maxUnits - projectData.takenUnits} units left</span>
                    </p>
                  </div>

                  {Object.keys(projectData.options).map((key) => (
                    <OptionSet name={key} options={projectData.options[key]}/>
                  ))}

                  <div className='mb-14 columns is-multiline'>
                    <div className='column is-12-touch is-12-desktop is-7-widescreen'>
                      <button className='button is-fullwidth'>
                        PLEDGE
                      </button>
                    </div>
                    <div className='column is-12-touch is-6-desktop is-5-widescreen'>
                      <button className='button px-6 mr-4'>
                        <svg
                          className='-mt-1'
                          width={27}
                          height={27}
                          viewBox='0 0 27 27'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>
                      <button className='button px-6'>
                        <svg
                          className='-mt-1'
                          width={24}
                          height={23}
                          viewBox='0 0 24 23'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z'
                            fill='currentColor'
                            stroke='currentColor'
                            strokeWidth='0.35'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='is-flex is-align-items-center'>
                    <p className='mb-0 mr-8 has-text-grey has-text-weight-bold'>
                      FOLLOW DESIGNER
                    </p>
                    <button
                      className='mr-1'
                      style={{ width: 32, height: 32 }}
                    >
                      <img
                        className='image'
                        src='yofte-assets/buttons/facebook-circle.svg'
                        alt=''
                      />
                    </button>
                    <button
                      className='mr-1'
                      style={{ width: 32, height: 32 }}
                    >
                      <img
                        className='image'
                        src='yofte-assets/buttons/instagram-circle.svg'
                        alt=''
                      />
                    </button>
                    <button style={{ width: 32, height: 32 }}>
                      <img
                        className='image'
                        src='yofte-assets/buttons/twitter-circle.svg'
                        alt=''
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='tabs is-large'>
                <ul className=''>
                  <li className='is-active'>
                    <a href='' className='has-text-white'>
                      Description
                    </a>
                  </li>
                  <li>
                    <a className='has-text-grey'>Community</a>
                  </li>
                  <li>
                    <a className='has-text-grey'>Status</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className='is-size-5'>
                  {projectData.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </>



      



    );
  }