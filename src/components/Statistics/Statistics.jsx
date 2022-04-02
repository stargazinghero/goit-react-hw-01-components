import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, statsData }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {statsData.map(data => {
          return (
            <StatisticsItem
              key={data.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <StatisticsLabel>{data.label}</StatisticsLabel>
              <StatisticsPercentage>{data.percentage}%</StatisticsPercentage>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statsData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
