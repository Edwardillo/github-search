import { Card, CardContent, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';

export const UserCard = ({ ...user }) => {
  const handleClick = () => {
    window.open(user.html_url, '_blank'); // Open the URL in a new tab
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={user.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="140"
            image={user.avatarUrl}
            alt={`${user.login} avatar`}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.bio || 'No bio available'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Followers:</strong> {user.followers?.totalCount}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Following:</strong> {user.following?.totalCount}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Public Repos:</strong> {user.repositories?.totalCount}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
