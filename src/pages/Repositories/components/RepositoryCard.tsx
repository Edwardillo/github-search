import { Card, CardActionArea, CardContent, CardHeader, Grid, Typography } from '@mui/material';

export const RepositoryCard = ({ ...repo }) => {
  const handleClick = () => {
    window.open(repo.html_url, '_blank'); // Open the URL in a new tab
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={repo.id}>
      <Card style={{ height: '100%' }}>
        <CardActionArea style={{ height: '100%' }} onClick={handleClick}>
          <CardHeader
            title={repo.name}
            subheader={`Owner: ${repo.owner.login}`}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {repo.description || 'No description available'}
            </Typography>
            <Typography variant="body2">
              <strong>Stars:</strong> {repo.stargazers_count}
            </Typography>
            <Typography variant="body2">
              <strong>Forks:</strong> {repo.forks_count}
            </Typography>
            <Typography variant="body2">
              <strong>Language:</strong> {repo.language || 'N/A'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
