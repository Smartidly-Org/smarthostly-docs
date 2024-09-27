import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quick Guide',
    Svg: require('@site/static/img/undraw_books_re_8gea.svg').default,
    description: (
      <>
        We know your time is valuable, so we’ve designed this guide to help you get up and running in just 5 minutes.

        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li><strong>Setting Up Your Hub:</strong> Learn how to create and customize your event space.</li>
          <li><strong>Going Live:</strong> A step-by-step guide to launching your event seamlessly.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Comprehensive Hub Management',
    Svg: require('@site/static/img/undraw_instruction_manual_cyae.svg').default,
    description: (
      <>
        Smarthostly Hub is your command center for managing all aspects of your event, from creating to execution.
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li><strong>Centralized Control:</strong> Manage ticketing, attendee engagement, and event settings all in one place.</li>
          <li><strong>Real-Time Analytics:</strong> Track attendance and engagement metrics live, helping you make informed decisions.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Integrated Multi-Platform Experience',
    Svg: require('@site/static/img/undraw_navigator_a479.svg').default,
    description: (
      <>
        Smarthostly offers a seamless experience across web and mobile platforms. Here’s what you can do:
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li><strong>Web Portal:</strong> Access powerful tools and manage your event from your desktop.</li>
          <li><strong>Mobile App:</strong> Stay connected on the go, with full control over your event from your smartphone.</li>
        </ul>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
