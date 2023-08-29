"""empty message

Revision ID: 6e5aee3ef79e
Revises: 9d1c5af713d3
Create Date: 2023-08-29 00:53:54.615395

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6e5aee3ef79e'
down_revision = '9d1c5af713d3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('item', schema=None) as batch_op:
        batch_op.add_column(sa.Column('sale_price', sa.Float(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('item', schema=None) as batch_op:
        batch_op.drop_column('sale_price')

    # ### end Alembic commands ###
