import { Page } from '../../components/layout'
import { ResponsiveBar } from '@nivo/bar'

const data = [
  { "country": "AD", "hot dog": 115, "hot dogColor": "hsl(313, 70%, 50%)", "burger": 165, "burgerColor": "hsl(161, 70%, 50%)", "sandwich": 171, "sandwichColor": "hsl(103, 70%, 50%)", "kebab": 97, "kebabColor": "hsl(309, 70%, 50%)", "fries": 70, "friesColor": "hsl(289, 70%, 50%)", "donut": 106, "donutColor": "hsl(36, 70%, 50%)" },
  { "country": "AE", "hot dog": 191, "hot dogColor": "hsl(123, 70%, 50%)", "burger": 160, "burgerColor": "hsl(49, 70%, 50%)", "sandwich": 157, "sandwichColor": "hsl(286, 70%, 50%)", "kebab": 77, "kebabColor": "hsl(201, 70%, 50%)", "fries": 29, "friesColor": "hsl(287, 70%, 50%)", "donut": 192, "donutColor": "hsl(258, 70%, 50%)" },
  { "country": "AF", "hot dog": 175, "hot dogColor": "hsl(182, 70%, 50%)", "burger": 177, "burgerColor": "hsl(330, 70%, 50%)", "sandwich": 94, "sandwichColor": "hsl(322, 70%, 50%)", "kebab": 139, "kebabColor": "hsl(182, 70%, 50%)", "fries": 177, "friesColor": "hsl(249, 70%, 50%)", "donut": 42, "donutColor": "hsl(65, 70%, 50%)" },
  { "country": "AG", "hot dog": 57, "hot dogColor": "hsl(286, 70%, 50%)", "burger": 22, "burgerColor": "hsl(124, 70%, 50%)", "sandwich": 0, "sandwichColor": "hsl(146, 70%, 50%)", "kebab": 37, "kebabColor": "hsl(242, 70%, 50%)", "fries": 140, "friesColor": "hsl(74, 70%, 50%)", "donut": 24, "donutColor": "hsl(240, 70%, 50%)" },
  { "country": "AI", "hot dog": 133, "hot dogColor": "hsl(18, 70%, 50%)", "burger": 192, "burgerColor": "hsl(39, 70%, 50%)", "sandwich": 174, "sandwichColor": "hsl(270, 70%, 50%)", "kebab": 177, "kebabColor": "hsl(195, 70%, 50%)", "fries": 34, "friesColor": "hsl(17, 70%, 50%)", "donut": 11, "donutColor": "hsl(304, 70%, 50%)" },
  { "country": "AL", "hot dog": 52, "hot dogColor": "hsl(251, 70%, 50%)", "burger": 162, "burgerColor": "hsl(258, 70%, 50%)", "sandwich": 109, "sandwichColor": "hsl(94, 70%, 50%)", "kebab": 31, "kebabColor": "hsl(219, 70%, 50%)", "fries": 191, "friesColor": "hsl(199, 70%, 50%)", "donut": 155, "donutColor": "hsl(181, 70%, 50%)" },
  { "country": "AM", "hot dog": 58, "hot dogColor": "hsl(186, 70%, 50%)", "burger": 107, "burgerColor": "hsl(29, 70%, 50%)", "sandwich": 90, "sandwichColor": "hsl(118, 70%, 50%)", "kebab": 75, "kebabColor": "hsl(258, 70%, 50%)", "fries": 122, "friesColor": "hsl(308, 70%, 50%)", "donut": 134, "donutColor": "hsl(188, 70%, 50%)" }
]

export const DashboardView = () => {
  return (
    <Page
      title="Dashboard"
      breadcrumbs={[
        { text: 'Home', path: '/' },
        { text: 'Dashboard', path: '/dashboard' },
      ]}
    >
      <div style={{ height: '500px' }}>
        <ResponsiveBar
            data={data}
            keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
      </div>
    </Page>
  )
}