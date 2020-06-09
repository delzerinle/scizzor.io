import {
  SEO,
  BrandsLayout,
  BackToPage,
  AppointmentApparelCard,
} from '@components';

const Appointment = () => (
  <>
    <SEO title="Title" description="description" />
    <BrandsLayout>
      <div className="px-3 md:px-0 pb-6">
        <BackToPage
          className="pb-8"
          link="/brands/measurements"
          title="Back to Measurements"
        />
        <p className="font-medium">All Appointments</p>
        <div className="flex flex-wrap -mx-2">
          <AppointmentApparelCard
            brand="Eleventy"
            name="Olusesan Peter"
            className="px-2 w-1/2 md:w-1/3"
            imageSrc="/images/apparel1.jpg"
            apparelName="Classic Fit Stretch Plaid Wool Suit"
          />

          <AppointmentApparelCard
            brand="Eleventy"
            name="Olusesan Peter"
            className="px-2 w-1/2 md:w-1/3"
            imageSrc="/images/apparel1.jpg"
            apparelName="Classic Fit Stretch Plaid Wool Suit"
          />

          <AppointmentApparelCard
            brand="Eleventy"
            name="Olusesan Peter"
            className="px-2 w-1/2 md:w-1/3"
            imageSrc="/images/apparel1.jpg"
            apparelName="Classic Fit Stretch Plaid Wool Suit"
          />

          <AppointmentApparelCard
            brand="Eleventy"
            name="Olusesan Peter"
            className="px-2 w-1/2 md:w-1/3"
            imageSrc="/images/apparel1.jpg"
            apparelName="Classic Fit Stretch Plaid Wool Suit"
          />

          <AppointmentApparelCard
            brand="Eleventy"
            name="Olusesan Peter"
            className="px-2 w-1/2 md:w-1/3"
            imageSrc="/images/apparel1.jpg"
            apparelName="Classic Fit Stretch Plaid Wool Suit"
          />

          <AppointmentApparelCard
            brand="Eleventy"
            name="Olusesan Peter"
            className="px-2 w-1/2 md:w-1/3"
            imageSrc="/images/apparel1.jpg"
            apparelName="Classic Fit Stretch Plaid Wool Suit"
          />
        </div>
      </div>
    </BrandsLayout>
  </>
);

export default Appointment;
