"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Point 1", movingAvg: 3, retentionAgg: 4 },
  { name: "Point 2", movingAvg: 5, retentionAgg: 6 },
  { name: "Point 3", movingAvg: 7, retentionAgg: 8 },
  { name: "Point 4", movingAvg: 10, retentionAgg: 11 },
  { name: "Point 5", movingAvg: 12, retentionAgg: 12 },
  { name: "Point 6", movingAvg: 13, retentionAgg: 11 },
  { name: "Point 7", movingAvg: 12, retentionAgg: 10 },
  { name: "Point 8", movingAvg: 11, retentionAgg: 9 },
  { name: "Point 9", movingAvg: 9, retentionAgg: 7 },
  { name: "Point 10", movingAvg: 6, retentionAgg: 5 },
  { name: "Point 11", movingAvg: 3, retentionAgg: 4 },
];

export default function RetentionTrendChart() {
  return (
    <div
      style={{
        background: "#0f0f1a",
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
      }}
    >
      <h3 style={{ color: "#fff", marginBottom: "16px" }}>
        All segment retention trend
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 80, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />

          {/* X-Axis: hidden ticks */}
          <XAxis dataKey="name" stroke="#aaa" tick={false} axisLine={false} />

          {/* Left Y-Axis */}
          <YAxis
            yAxisId="left"
            stroke="#FF9900"
            domain={[3, 13]}
            ticks={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
            label={{
              value: "MOVING_AVG_RETENTION",
              angle: -90,
              position: "insideLeft",
              fill: "#FF9900",
            }}
          />

          {/* Right Y-Axis */}
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#3399FF"
            domain={[3, 13]}
            ticks={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
            label={{
              value: "Sum of REVENTION_AGG",
              angle: 90,
              position: "insideRight",
              fill: "#3399FF",
            }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1f1f2e",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
            labelStyle={{ color: "#ccc" }}
          />

          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ color: "#ccc" }}
          />

          {/* Line for Moving Avg Retention */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="movingAvg"
            stroke="#FF9900"
            name="MOVING_AVG_RETENTION"
            strokeWidth={2}
            dot={false}
          />

          {/* Line for Retention Agg */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="retentionAgg"
            stroke="#3399FF"
            name="Sum of REVENTION_AGG"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
