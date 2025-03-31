# -*- coding: utf-8 -*-
import pandas as pd

data = pd.read_csv("C:\\Users\\Anshika\\OneDrive\\Desktop\\webtech\\python\\pandas\\sales_data.csv")
df = pd.DataFrame(data)

df['date'] = pd.to_datetime(df['date'])
df['month'] = df['date'].dt.to_period('M')

# creating new columns
df["total_revenue"] = df['quantity']*df['price']
print(df)

# grouping data
monthly_sales = df.groupby('month')['total_revenue'].sum()
print(monthly_sales)
print("max monthly sales is of product: ")

grouped_data = df.groupby(['month', 'product'])['total_revenue'].sum()
print(grouped_data)