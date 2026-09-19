import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

type StatCardProps = {
    title: string;
    value: number;
    icon: ReactNode;
};

function StatCard ({ title, value, icon }: StatCardProps) {
    return (
        <Card>
            <CardContent>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems : 'center',
                }}
                >
                <Box> 

                <Typography variant="body2">
                    {title}
                </Typography>

                <Typography variant="h4">
                    {value}
                </Typography>
                </Box>

                {icon}
                </Box>
            </CardContent>
            </Card>
            
        );
}

export default StatCard;