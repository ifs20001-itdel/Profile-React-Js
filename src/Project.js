import './App.css';

function Project() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xl text-green-700 tracking-widest font-medium title-font mb-1">PROJECT</h2>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-grey-100 text-grey-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-green-700 text-lg title-font font-medium mb-2">Health Calc</h2>
            <p class="leading-relaxed text-base">Health calc is an application to measure ideal height, ideal weight, and also
              water needs for someone. made using Java and NetBeans</p>
            <a class="mt-3 text-green-700 inline-flex items-center">
              December 2021
            </a>
          </div>
        </div>

        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-green-700 text-lg title-font font-medium mb-2">Face Emotion Recognition</h2>
            <p class="leading-relaxed text-base">
              <ul>
                <li>Face Emotion Recognition is an application that applies the deep learning method.</li>
                <li>
                  The Face expression recognition dataset (Kaggel) is used to test the face
                  emotion recognition model, which consists of 35,000 images of many
                  different people for 7 types of emotions with 5 angles. According to the
                  experimental results using the Kaggel facial expression recognition dataset,
                  the accuracy obtained was 83%.
                </li>
              </ul>
            </p>
            <a class="mt-3 text-green-700 inline-flex items-center">December 2022
            </a>
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-grey-100 text-grey-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>


        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-grey-100 text-grey-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-green-700 text-lg title-font font-medium mb-2">Lecturer Evaluation Form Website</h2>
            <p class="leading-relaxed text-base">Lecturer Evaluation Form Website is a website that helps lecturers at IT Del
              see their achievements and evaluate the achievements they have made
              during one semester.</p>
            <a class="mt-3 text-green-700 inline-flex items-center">January 2023
            </a>
          </div>
        </div>

        <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-green-700 text-lg title-font font-medium mb-2">Website Rumah Sakit, Competition</h2>
            <p class="leading-relaxed text-base">
              Website created using queries provided by wikidata, and I added some new data sets to complete some queries that wikidata doesn't have
            </p>
            <a class="mt-3 text-green-700 inline-flex items-center">April 2021
            </a>
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-grey-100 text-grey-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
