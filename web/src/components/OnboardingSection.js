import _ from 'lodash';
import React from 'react';
import { classNames } from '../utils';
import SectionActions from './SectionActions';

export default class OnboardSection extends React.Component {
  render() {
    const section = { title: 'yes' };

    return (
      <section className={classNames('section')}>
        {(_.get(section, 'title', null) ||
          _.get(section, 'subtitle', null)) && (
          <div className={classNames('container', 'container--large')}>
            {_.get(section, 'subtitle', null) && (
              <div className="section__subtitle">
                {_.get(section, 'subtitle', null)}
              </div>
            )}
            {_.get(section, 'title', null) && (
              <h2 className="section__title mt-0">
                {_.get(section, 'title', null)}
              </h2>
            )}
          </div>
        )}
        content
        {_.get(section, 'actions', null) && (
          <div className={classNames('container', 'container--medium', {})}>
            <div className={classNames('section__actions', 'btn-group', {})}>
              <SectionActions
                {...this.props}
                actions={_.get(section, 'actions', null)}
              />
            </div>
          </div>
        )}
      </section>
    );
  }
}
