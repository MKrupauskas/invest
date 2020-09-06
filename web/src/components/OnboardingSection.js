import React from 'react';
import _ from 'lodash';
import { ResponsiveLine } from '@nivo/line';

import { classNames, toStyleObj, withPrefix } from '../utils';
import GridItem from './GridItem';
import SectionActions from './SectionActions';

export default (props) => {
  let section = _.get(props, 'section', null);
  let align_x = _.get(section, 'align', null) || 'center';
  let padding_top = _.get(section, 'padding_top', null) || 'medium';
  let padding_bottom = _.get(section, 'padding_bottom', null) || 'medium';
  let bg_color = _.get(section, 'background_color', null) || 'none';
  let bg_img_opacity_pct =
    _.get(section, 'background_image_opacity', null) || 100;
  let bg_img_opacity = bg_img_opacity_pct * 0.01;
  let bg_img_size = _.get(section, 'background_image_size', null) || 'cover';
  let bg_img_position =
    _.get(section, 'background_image_position', null) || 'center center';
  let bg_img_repeat =
    _.get(section, 'background_image_repeat', null) || 'no-repeat';
  let grid_gap_x = _.get(section, 'grid_gap_horiz', null) || 'medium';
  let grid_gap_y = _.get(section, 'grid_gap_vert', null) || 'medium';

  const [value, setValue] = React.useState(250);

  const chartData = [
    {
      id: 'Your portfolio',
      color: '#29cf7f',
      data: new Array(15).fill(0).map((item, index) => ({
        x: `${2020 + index}`,
        y: (index * value * (1.07 + Math.random() * 0.05) ** index).toFixed(2),
      })),
    },
  ];

  return (
    <section
      className={classNames('section', {
        'has-border': _.get(section, 'has_border', null),
        'has-cover': _.get(section, 'background_image', null),
        'bg-none': bg_color === 'none',
        'bg-primary': bg_color === 'primary',
        'bg-secondary': bg_color === 'secondary',
        'pt-4': padding_top === 'small',
        'pt-6': padding_top === 'medium' || padding_top === 'large',
        'pt-md-7': padding_top === 'large',
        'pb-4': padding_bottom === 'small',
        'pb-6': padding_bottom === 'medium' || padding_bottom === 'large',
        'pb-md-7': padding_bottom === 'large',
      })}
    >
      {_.get(section, 'background_image', null) && (
        <div
          className="cover-img"
          style={toStyleObj(
            "background-image: url('" +
            withPrefix(_.get(section, 'background_image', null)) +
            "'); opacity: " +
            bg_img_opacity +
            '; background-size: ' +
            bg_img_size +
            '; background-repeat: ' +
            bg_img_repeat +
            '; background-position: ' +
            bg_img_position,
          )}
        />
      )}
      {(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (
        <div
          className={classNames('container', 'container--medium', {
            'mb-5': grid_gap_y === 'small' || grid_gap_y === 'medium',
            'mb-4': grid_gap_y === 'large',
            'text-center': align_x === 'center',
            'text-right': align_x === 'right',
          })}
        >
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
      <div className="container">
        <div class="slidecontainer">
          <input
            type="range"
            min="10"
            max="5000"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            class="slider"
            id="myRange"
          />
        </div>
      </div>
      <div className="container" style={{ marginTop: 30 }}>
        <h2>${value} per month</h2>
      </div>
      <div className="container" style={{ height: 500, marginTop: 30 }}>
        <ResponsiveLine
          data={chartData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Portfolio size, ‎€',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          colors={{ scheme: 'nivo' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          enableArea={true}
        // legends={[
        //   {
        //     anchor: 'bottom-right',
        //     direction: 'column',
        //     justify: false,
        //     translateX: 100,
        //     translateY: 0,
        //     itemsSpacing: 0,
        //     itemDirection: 'left-to-right',
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: 'circle',
        //     symbolBorderColor: 'rgba(0, 0, 0, .5)',
        //     effects: [
        //       {
        //         on: 'hover',
        //         style: {
        //           itemBackground: 'rgba(0, 0, 0, .03)',
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
        />
      </div>
      {_.get(section, 'grid_items', null) && (
        <div className="container">
          <div
            className={classNames('grid', {
              'grid-gap-small': grid_gap_x === 'small',
              'grid-gap-large': grid_gap_x === 'large',
            })}
          >
            {_.map(_.get(section, 'grid_items', null), (item, item_idx) => (
              <GridItem
                key={item_idx}
                {...props}
                section={section}
                item={item}
              />
            ))}
          </div>
        </div>
      )}
      {_.get(section, 'actions', null) && (
        <div
          className={classNames('container', 'container--medium', {
            'mt-4': grid_gap_y !== 'large',
            'mt-3': grid_gap_y === 'large',
          })}
        >
          <div
            className={classNames('section__actions', 'btn-group', {
              'justify-center': align_x === 'center',
              'justify-end': align_x === 'right',
            })}
          >
            <SectionActions
              {...props}
              actions={_.get(section, 'actions', null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};
